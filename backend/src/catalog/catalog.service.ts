import { Injectable, Query } from '@nestjs/common';
import { MOCK_CATEGORIES, MOCK_SHOPS, MOCK_PRODUCTS } from './mocks';

import { IProductsQuery } from './types';

@Injectable()
export class CatalogService {
  private shops = MOCK_SHOPS;
  private categories = MOCK_CATEGORIES;
  private products = MOCK_PRODUCTS;

  getAllShops() {
    return this.shops;
  }

  getCategoriesByShop(shopName: string) {
    return this.categories.filter((category) => category.shop === shopName);
  }

  getProductsByShop(@Query() query: IProductsQuery) {
    const page = query.page - 1;
    const { shop, category, subCategory } = query;

    const STEP = 8;

    let products = this.products.filter(
      (product) => product.shop === shop,
    );

    if (category) {
      products = products.filter(
        (product) => product.category === category,
      );
    }

    if (subCategory) {
      products = products.filter(
        (product) => product.subCategory === subCategory,
      );
    }

    return {
      products: products.slice(page * STEP, page * STEP + STEP),
      total: Math.ceil(products.length / STEP),
    };
  }
}
