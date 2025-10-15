import { NextResponse } from 'next/server';
import productsData from '@/app/data/products.json';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      products: productsData
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
