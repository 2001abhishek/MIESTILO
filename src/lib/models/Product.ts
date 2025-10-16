import { ObjectId } from 'mongodb';

export interface Product {
  _id?: ObjectId;
  id: number;
  name: string;
  image: string;
  details: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInput {
  name: string;
  image: string;
  details: string;
}
