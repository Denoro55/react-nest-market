export interface IShopItem {
  id: string;
  name: string;
  label: string;
  image: string;
}

export interface ICategoryItem {
  id: string;
  name: string;
  label: string;
  parentName?: string;
}

export interface IProductItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface IProductResponse {
  products: IProductItem[];
  total: number;
}
