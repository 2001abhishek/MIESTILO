import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { BlogService } from '@/lib/services/blogService';

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
    
    // Validate required fields
    if (!blogData.title || !blogData.date || !blogData.category || !blogData.author || !blogData.content) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: title, date, category, author, content' },
        { status: 400 }
      );
    }
    
    // Create new blog post using MongoDB service
    const newBlog = await BlogService.createBlog({
      title: blogData.title,
      image: blogData.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      date: blogData.date,
      category: blogData.category,
      readTime: blogData.readTime || '5 min read',
      author: blogData.author,
      excerpt: blogData.excerpt || blogData.content.substring(0, 150) + '...',
      content: blogData.content
    });
    
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
