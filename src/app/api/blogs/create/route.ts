import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');
    
    if (!sessionCookie) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const blogData = await request.json();
    
    // Read existing blogs
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'blogs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const blogs = JSON.parse(fileContents);
    
    // Generate new ID
    const newId = blogs.length > 0 ? Math.max(...blogs.map((b: { id: number }) => b.id)) + 1 : 1;
    
    // Create new blog post
    const newBlog = {
      id: newId,
      title: blogData.title,
      image: blogData.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      date: blogData.date,
      category: blogData.category,
      readTime: blogData.readTime,
      author: blogData.author,
      excerpt: blogData.excerpt || blogData.content.substring(0, 150) + '...',
      content: blogData.content
    };
    
    // Add to beginning of array (newest first)
    blogs.unshift(newBlog);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), 'utf8');
    
    return NextResponse.json({
      success: true,
      message: 'Blog created successfully!',
      blog: newBlog
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
