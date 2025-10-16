import { getDatabase } from '../mongodb';
import { Product, ProductInput } from '../models/Product';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'products';

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    try {
      const db = await getDatabase();
      const products = await db
        .collection<Product>(COLLECTION_NAME)
        .find({})
        .sort({ id: -1 })
        .toArray();
      
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }
  }

  static async getProductById(id: number): Promise<Product | null> {
    try {
      const db = await getDatabase();
      const product = await db
        .collection<Product>(COLLECTION_NAME)
        .findOne({ id });
      
      return product;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw new Error('Failed to fetch product');
    }
  }

  static async createProduct(productData: ProductInput): Promise<Product> {
    try {
      const db = await getDatabase();
      
      // Get the next ID
      const lastProduct = await db
        .collection<Product>(COLLECTION_NAME)
        .findOne({}, { sort: { id: -1 } });
      
      const nextId = lastProduct ? lastProduct.id + 1 : 1;
      
      const newProduct: Product = {
        id: nextId,
        ...productData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await db
        .collection<Product>(COLLECTION_NAME)
        .insertOne(newProduct);

      return { ...newProduct, _id: result.insertedId };
    } catch (error) {
      console.error('Error creating product:', error);
      throw new Error('Failed to create product');
    }
  }

  static async updateProduct(id: number, productData: Partial<ProductInput>): Promise<Product | null> {
    try {
      const db = await getDatabase();
      
      const updateData = {
        ...productData,
        updatedAt: new Date(),
      };

      const result = await db
        .collection<Product>(COLLECTION_NAME)
        .findOneAndUpdate(
          { id },
          { $set: updateData },
          { returnDocument: 'after' }
        );

      if (!result) {
        throw new Error('Product not found');
      }
      return result;
    } catch (error) {
      console.error('Error updating product:', error);
      throw new Error('Failed to update product');
    }
  }

  static async deleteProduct(id: number): Promise<boolean> {
    try {
      const db = await getDatabase();
      
      const result = await db
        .collection<Product>(COLLECTION_NAME)
        .deleteOne({ id });

      return result.deletedCount > 0;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw new Error('Failed to delete product');
    }
  }
}
