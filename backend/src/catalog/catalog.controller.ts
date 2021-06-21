import { CatalogService } from './catalog.service';
import { Controller, Get, Query } from '@nestjs/common';

import { IProductsQuery } from './types';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('shops')
  getAllShops() {
    return this.catalogService.getAllShops();
  }

  @Get('categories')
  getCategoriesByShop(@Query('shop') shop) {
    return this.catalogService.getCategoriesByShop(shop);
  }

  @Get('products')
  getProductsByShop(@Query() query: IProductsQuery) {
    return this.catalogService.getProductsByShop(query);
  }
}
