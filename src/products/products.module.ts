import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { SearchService } from '../search/search.service';
import { SearchServiceInterface } from '../search/interface/search.service.interface';
import { ProductElasticIndex } from '../search/search-index/product.elastic.index';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Product.name,
      useFactory: () => {
        const schema = ProductSchema;
        schema.pre('save', function(next) {
          // TODO: add save/update index code here
          // 'this' object has the 'product' object to save/update
          // index should be updated with the product object
          console.log(this);
          next();
        });
        return schema;
      }
    }]),
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    })
  ],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: 'SearchServiceInterface',
      useClass: SearchService
    },
    ProductElasticIndex,
  ]
})
export class ProductsModule {}
