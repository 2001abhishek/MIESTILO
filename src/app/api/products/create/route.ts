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

    const productData = await request.json();
    
    // Read existing products
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'products.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileContents);
    
    // Generate new ID
    const newId = products.length > 0 ? Math.max(...products.map((p: any) => p.id)) + 1 : 1;
    
    // Create new product
    const newProduct = {
      id: newId,
      name: productData.name,
      image: productData.image,
      details: productData.details
    };
    
    // Add to beginning of array (newest first)
    products.unshift(newProduct);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
    
    return NextResponse.json({
      success: true,
      message: 'Product created successfully!',
      product: newProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create product' },
      { status: 500 }
    );
  }
}
