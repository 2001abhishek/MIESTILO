import { NextResponse } from 'next/server';
import blogsData from '@/app/data/blogs.json';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      blogs: blogsData
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
