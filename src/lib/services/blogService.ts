import { getDatabase } from '../mongodb';
import { Blog, BlogInput } from '../models/Blog';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'blogs';

export class BlogService {
  static async getAllBlogs(): Promise<Blog[]> {
    try {
      const db = await getDatabase();
      const blogs = await db
        .collection<Blog>(COLLECTION_NAME)
        .find({})
        .sort({ id: -1 })
        .toArray();
      
      return blogs;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw new Error('Failed to fetch blogs');
    }
  }

  static async getBlogById(id: number): Promise<Blog | null> {
    try {
      const db = await getDatabase();
      const blog = await db
        .collection<Blog>(COLLECTION_NAME)
        .findOne({ id });
      
      return blog;
    } catch (error) {
      console.error('Error fetching blog by ID:', error);
      throw new Error('Failed to fetch blog');
    }
  }

  static async createBlog(blogData: BlogInput): Promise<Blog> {
    try {
      const db = await getDatabase();
      
      // Get the next ID
      const lastBlog = await db
        .collection<Blog>(COLLECTION_NAME)
        .findOne({}, { sort: { id: -1 } });
      
      const nextId = lastBlog ? lastBlog.id + 1 : 1;
      
      const newBlog: Blog = {
        id: nextId,
        ...blogData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await db
        .collection<Blog>(COLLECTION_NAME)
        .insertOne(newBlog);

      return { ...newBlog, _id: result.insertedId };
    } catch (error) {
      console.error('Error creating blog:', error);
      throw new Error('Failed to create blog');
    }
  }

  static async updateBlog(id: number, blogData: Partial<BlogInput>): Promise<Blog | null> {
    try {
      const db = await getDatabase();
      
      const updateData = {
        ...blogData,
        updatedAt: new Date(),
      };

      const result = await db
        .collection<Blog>(COLLECTION_NAME)
        .findOneAndUpdate(
          { id },
          { $set: updateData },
          { returnDocument: 'after' }
        );

      return result.value;
    } catch (error) {
      console.error('Error updating blog:', error);
      throw new Error('Failed to update blog');
    }
  }

  static async deleteBlog(id: number): Promise<boolean> {
    try {
      const db = await getDatabase();
      
      const result = await db
        .collection<Blog>(COLLECTION_NAME)
        .deleteOne({ id });

      return result.deletedCount > 0;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw new Error('Failed to delete blog');
    }
  }
}
