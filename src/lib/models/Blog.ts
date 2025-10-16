import { ObjectId } from 'mongodb';

export interface Blog {
  _id?: ObjectId;
  id: number;
  title: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BlogInput {
  title: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  excerpt?: string;
  content: string;
}
