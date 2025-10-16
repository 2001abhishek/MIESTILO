import { NextResponse } from 'next/server';
import { BlogService } from '@/lib/services/blogService';
import { cookies } from 'next/headers';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogId = parseInt(id);
    
    if (isNaN(blogId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid blog ID' },
        { status: 400 }
      );
    }

    const blog = await BlogService.getBlogById(blogId);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      blog
    });
  } catch (error) {
    console.error('Blog by ID API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const session = cookieStore.get('session');
    
    if (!session) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const blogId = parseInt(id);
    
    if (isNaN(blogId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid blog ID' },
        { status: 400 }
      );
    }

    const deleted = await BlogService.deleteBlog(blogId);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: 'Blog not found or already deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Delete Blog API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
