export interface ProductModel {
  _id: string;
  title: string;
  image: string;
  price: number;
  likes?: number;
  description?: string;
}
