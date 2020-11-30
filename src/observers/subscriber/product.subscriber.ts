import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Product } from '../../products/schemas/product.schema';
import { ProductElasticIndex } from '../../search/search-index/product.elastic.index';

@Injectable()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {

  constructor(
    // @InjectConnection() readonly connection: Connection,
    private readonly productEsIndex: ProductElasticIndex) {
    // TODO: uncomment
    // connection.subscribers.push(this);
  }

  public listenTo(): any {
    return Product;
  }

  public async afterInsert(event: InsertEvent<Product>): Promise<any> {
    return await this.productEsIndex.insertProductDocument(event.entity);
  }

  public async afterUpdate(event: UpdateEvent<Product>): Promise<any> {
    return await this.productEsIndex.updateProductDocument(event.entity);
  }
}
