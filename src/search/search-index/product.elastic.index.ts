import { Inject, Injectable } from '@nestjs/common';
import { SearchServiceInterface } from '../interface/search.service.interface';
import { productIndex } from '../constant/product.elastic';
import { Product } from '../../products/schemas/product.schema';

@Injectable()
export class ProductElasticIndex {
  constructor(
    @Inject('SearchServiceInterface')
    private readonly searchService: SearchServiceInterface<any>,
  ) {

  }

  public async reIndexAll(products: Product[]) {
    const len = products.length;
    for (let i = 0; i < len; i ++) {
      const product = products[i];
      try {
        await this.deleteProductDocument(product.id);
      } catch (e) {
      }
      await this.insertProductDocument(product);
    }
  }

  public insertProductDocument(product: Product): Promise<any> {
    const data = this.productDocument(product);
    return this.searchService.insertIndex(data);
  }

  public async updateProductDocument(product: Product): Promise<any> {
    const data = this.productDocument(product);
    await this.deleteProductDocument(product.id);
    return await this.searchService.insertIndex(data);
  }

  private async deleteProductDocument(prodId: string): Promise<any> {
    const data = {
      index: productIndex._index,
      type: productIndex._type,
      id: prodId,
    };
    return await this.searchService.deleteDocument(data);
  }

  private bulkIndex(productId: string): any {
    return {
      _index: productIndex._index,
      _type: productIndex._type,
      _id: productId,
    };
  }

  private productDocument(product: Product): any {
    const bulk = [];
    bulk.push({
      index: this.bulkIndex(product.id),
    });
    bulk.push(product);
    return {
      body: bulk,
      index: productIndex._index,
      type: productIndex._type,
    };
  }

}
