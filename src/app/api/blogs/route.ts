import { NextResponse } from 'next/server';
import { BlogService } from '@/lib/services/blogService';

export async function GET() {
  try {
    const blogs = await BlogService.getAllBlogs();
    
    return NextResponse.json({
      success: true,
      blogs
    });
  } catch (error) {
    console.error('Blogs API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
