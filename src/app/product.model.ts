export interface Product{
  name: string;
  price: number;
  image:string;
  // Se le pone ? cuando ese elemento es opcional
  category?:string;
}
