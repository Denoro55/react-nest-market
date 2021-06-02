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
