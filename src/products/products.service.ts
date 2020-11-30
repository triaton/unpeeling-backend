import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ElasticsearchService } from '@nestjs/elasticsearch';

import { Product, Review } from './schemas/product.schema';
import { AddReviewDto } from './dtos/add-review.dto';
import { ProductSearchObject } from "./product.search.object";
import { featureFilterKey, productIndex } from '../search/constant/product.elastic';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
        private elasticSearchService: ElasticsearchService,
    ) {

    }

    async reIndexAll() {
        // TODO: please refer this part for adding indexes.
        // it should be refactored to a service method
        const products = await this.findAll();
        const len = products.length;
        for (let i = 0; i < len; i++) {
            const product = products[i];
            await this.elasticSearchService.index({
                index: productIndex._index,
                body: {
                    id: product._id,
                    categories: product.categories,
                    colors: product.colors,
                    descriptions: product.descriptions.map(description => ({ value: description.value })),
                    features: product.features.filter(feature => feature.key === featureFilterKey),
                    manufacturer: product.manufacturer,
                    name: product.name,
                }
            });
        }
        console.log('reindexed');
    }

    findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    findById(id: string): Promise<Product> {
        return this.productModel.findOne({ id }).exec();
    }

    findByName(name: string): Promise<Product[]> {
        return this.productModel.find({ name: { "$regex": name, "$options": "i" } }).exec();
    }

    saveProduct(product: Product): Promise<Product> {
        return product.save();
    }

    async search(q: any): Promise<any> {
        const data = ProductSearchObject.searchObject(q);
        const { body } = await this.elasticSearchService.search(data);
        if (!body) {
            return [];
        }
        return body.hits.hits.map(element => element._source);
    }

    async findReviews(id: string): Promise<Review[]> {
        const product = await this.productModel.findOne({ id }, { reviews: 1 }).exec();
        return product.reviews;
    }

    async addReview(productId: string, payload: AddReviewDto): Promise<Review> {
        const product = await this.findById(productId);
        const review = new Review(); // TODO: make review object with payload
        product.reviews.push(payload);
        product.save();
        return review;
    }

    // search(q: any): Promise<any>;

}
