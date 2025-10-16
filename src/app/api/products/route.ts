import { NextResponse } from 'next/server';
import { ProductService } from '@/lib/services/productService';

export async function GET() {
  try {
    const products = await ProductService.getAllProducts();
    
    return NextResponse.json({
      success: true,
      products
    });
  } catch (error) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
