import { Body, Controller, Delete, Get, NotFoundException, Param, Put, Query } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Review } from './schemas/product.schema';
import { ProductDto } from './dtos/product.dto';
import { ProductsService } from './products.service';
import { AddReviewDto } from './dtos/add-review.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

  constructor(
    private productsService: ProductsService,
  ) {
  }

  @Get()
  @ApiOkResponse({ type: () => ProductDto, isArray: true })
  async findAll(): Promise<ProductDto[]> {
    const products = await this.productsService.findAll();
    return products.map(product => product.toDto());
  }

  @Get('search')
  search(@Query() query: any): Promise<any> {
    return this.productsService.search(query.q);
  }

  @Get('find')
  @ApiQuery({ name: 'name', required: true })
  @ApiOkResponse({ type: () => ProductDto, isArray: true })
  async findByName(@Query('name') name: string): Promise<ProductDto[]> {
    const products = await this.productsService.findByName(name);
    console.log(products.length);
    return products.map(product => product.toDto());
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiOkResponse({ type: () => ProductDto })
  async findById(@Param('id') id: string): Promise<ProductDto> {
    const product = await this.productsService.findById(id);
    return product.toDto();
  }

  @Put(':id/reviews')
  @ApiParam({ name: 'id', required: true })
  @ApiOkResponse({ type: () => Review })
  addReview(@Param('id') id: string, @Body() payload: AddReviewDto): Promise<Review> {
    return this.productsService.addReview(id, payload);
  }

  @Put(':productId/review/:reviewId')
  @ApiParam({ name: 'productId', required: true })
  @ApiParam({ name: 'reviewId', required: true })
  @ApiOkResponse({ type: () => Review })
  async updateReview(@Param('productId') productId: string,
                     @Param('reviewId') reviewId: string,
                     @Body() payload: AddReviewDto): Promise<Review> {
    const product = await this.productsService.findById(productId);
    if (!product) {
      throw new NotFoundException('The product was not found.');
    }

    const review = product.reviews.find(r => r.id === reviewId);
    if (!review) {
      throw new NotFoundException('The review was not found.');
    }

    review.title = payload.title;
    review.text = payload.text;
    console.log(product);
    // TODO: update operation here
    await this.productsService.saveProduct(product);
    return review;
  }

  @Delete(':productId/review/:reviewId')
  @ApiParam({ name: 'productId', required: true })
  @ApiParam({ name: 'reviewId', required: true })
  @ApiOkResponse({ type: () => Review })
  async deleteReview(@Param('productId') productId: string,
                     @Param('reviewId') reviewId: string): Promise<Review> {
    const product = await this.productsService.findById(productId);
    if (!product) {
      throw new NotFoundException('The product was not found.');
    }
    const reviewIndex = product.reviews.findIndex(r => r.id === reviewId);
    if (reviewIndex < 0) {
      throw new NotFoundException('The review was not found.');
    }
    const deletedReviews = product.reviews.splice(reviewIndex, 1);
    await this.productsService.saveProduct(product);
    return deletedReviews[0];
  }

  @Get(':id/reviews')
  @ApiParam({ name: 'id', required: true })
  @ApiOkResponse({ type: () => ProductDto })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  async findReviewsByProdutId(@Param('id') id: string, @Query('skip') skip = 0, @Query('take') take = 1): Promise<Review[]> {
    const reviews = await this.productsService.findReviews(id);
    skip = +skip;
    take = +take;

    return reviews.slice(skip, skip + take);
  }

  @Get(':id/aggregatedReviews')
  @ApiParam({ name: 'id', required: true })
  @ApiOkResponse({ type: () => ProductDto })
  @ApiQuery({ name: 'num', required: false })
  async findAggregatedReviewsByProductId(@Param('id') id: string, @Query('num') num = 3) {
    const reviews = await this.productsService.findReviews(id);
    const aggregatedReviews = [];
    num = +num;

    for (let i = 0; i < num; i++) {
      const randomNum = Math.floor(Math.random() * reviews.length);
      aggregatedReviews.push(reviews[randomNum]);
    }

    return aggregatedReviews;
  }

}
