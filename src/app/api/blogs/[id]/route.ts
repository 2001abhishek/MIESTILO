import { NextResponse } from 'next/server';
import blogsData from '@/app/data/blogs.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogId = parseInt(id);
    const blog = blogsData.find((b) => b.id === blogId);

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
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}
