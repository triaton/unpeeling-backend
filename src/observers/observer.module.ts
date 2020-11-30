import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from '../products/schemas/product.schema';
import { SearchService } from '../search/search.service';
import { ProductElasticIndex } from '../search/search-index/product.elastic.index';
import { SearchServiceInterface } from '../search/interface/search.service.interface';
import { ProductSubscriber } from './subscriber/product.subscriber';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [
    {
      provide: 'SearchServiceInterface',
      useClass: SearchService,
    },
    ProductElasticIndex,
    ProductSubscriber,
  ],
  controllers: [],
  exports: [],
})
export class ObserverModule {
}
