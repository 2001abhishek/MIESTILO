import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ProductService } from '@/lib/services/productService';

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

    const productData = await request.json();
    
    // Validate required fields
    if (!productData.name || !productData.image || !productData.details) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: name, image, details' },
        { status: 400 }
      );
    }
    
    // Create new product using MongoDB service
    const newProduct = await ProductService.createProduct({
      name: productData.name,
      image: productData.image,
      details: productData.details
    });
    
    return NextResponse.json({
      success: true,
      product: newProduct,
      message: 'Product created successfully'
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create product' },
      { status: 500 }
    );
  }
}
