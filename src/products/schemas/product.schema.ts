import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ProductDto } from '../dtos/product.dto';

export class Review {
    @ApiProperty()
    date: string;

    @ApiProperty()
    dateseen: string;

    @ApiProperty()
    didPurchase: string;

    @ApiProperty()
    id: string;

    @ApiProperty()
    numHelpful: number;

    @ApiProperty()
    rating: number;

    @ApiProperty()
    sourceURLs: [];

    @ApiProperty()
    text: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    username: string;
}

export class Tab1 {
    @ApiProperty()
    to_likes: number;

    @ApiProperty()
    to_dislikes: number;

    @ApiProperty()
    to_rating: number;

    @ApiProperty()
    wordcloud: [];
}

interface Description {
    value: string;
    sourceURLs: string[];
}

interface Feature {
    value: string[];
    key: string;
}

@Schema()
export class Product extends Document {
    @Prop()
    @ApiProperty()
    id: string;

    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    brand: string;

    @Prop()
    @ApiProperty()
    asins: string;

    @Prop()
    @ApiProperty()
    categories: { name: string };

    @Prop([String])
    @ApiProperty()
    colors: string[];

    @Prop()
    @ApiProperty()
    dateAdded: string;

    @Prop()
    @ApiProperty()
    dateUpdated: string;

    @Prop(raw([{
        value: { type: String },
        sourceURLs: { type: [String] },
    }]))
    @ApiProperty()
    descriptions: Description[];

    @Prop()
    @ApiProperty()
    dimension: string;

    @Prop()
    @ApiProperty()
    domains: { name: string };

    @Prop()
    @ApiProperty()
    ean: { name: string };

    @Prop()
    @ApiProperty()
    ean13: string;

    @Prop(raw([
        {
            value: [String],
            key: String
        }
    ]))
    @ApiProperty()
    features: Feature[];

    @Prop()
    @ApiProperty()
    gtins: { name: string };

    @Prop()
    @ApiProperty()
    imageURLs: { name: string };

    @Prop()
    @ApiProperty()
    keys: { name: string };

    @Prop()
    @ApiProperty()
    manufacturer: string;

    @Prop()
    @ApiProperty()
    manufacturerNumber: string;

    @Prop()
    @ApiProperty()
    merchants: { dateSeen: string, name: string };

    @Prop()
    @ApiProperty()
    prices: {
              amountMax: number, amountMin: number, availability: string,
              currency: string, dateSeen: { name: string }, isSale: string,
              sourceURLs: { name: string }, merchant: string, returnPolicy:
              string, shipping: string, offer: string, condition: string
    };

    @Prop()
    @ApiProperty()
    primaryCategories: { name: string };

    @Prop()
    @ApiProperty()
    primaryImageURLs: { name: string };

    @Prop()
    @ApiProperty()
    quantities: { value: string, sourceURLs: { name: string }, dateSeen: { name: string }};

    @Prop()
    @ApiProperty()
    sdsURLs: { name: string };

    @Prop()
    @ApiProperty()
    secondaryCategories: { name: string };

    @Prop()
    @ApiProperty()
    skus: { value: string, sourceURLs: { name: string }};

    @Prop()
    @ApiProperty()
    sourceURLs: { name: string };

    @Prop()
    @ApiProperty()
    taxonomy: { name: string };

    @Prop()
    @ApiProperty()
    taxonomyLevel1: { name: string };

    @Prop()
    @ApiProperty()
    taxonomyLevel2: { name: string };

    @Prop()
    @ApiProperty()
    taxonomyLevel3: { name: string };

    @Prop()
    @ApiProperty()
    taxonomyLevel4: { name: string };

    @Prop()
    @ApiProperty()
    upc: { name: string };

    @Prop()
    @ApiProperty()
    upca: string;

    @Prop()
    @ApiProperty()
    webstieIDs: { name: string };

    @Prop()
    @ApiProperty()
    weight: string;

    @Prop()
    @ApiProperty()
    _v: string;

    @Prop()
    @ApiProperty()
    sizes: { name: string };

    @Prop()
    @ApiProperty()
    taxonomyLevel5: { name: string };

    @Prop()
    @ApiProperty()
    count: string;

    @Prop()
    @ApiProperty()
    agg_neg_keyphrases: { name: string };

    @Prop()
    @ApiProperty()
    agg_pos_keyphrases: { name: string };

    @Prop()
    @ApiProperty()
    top_three_keyphrases: { name: string };

    @Prop()
    @ApiProperty()
    wordcloud: { name: string };

    @Prop()
    @ApiProperty()
    to_rating: number;

    @Prop()
    @ApiProperty()
    to_likes: number;

    @Prop()
    @ApiProperty()
    to_dislikes: number;

    @Prop()
    @ApiProperty()
    sentiment_score: number;

    @Prop()
    @ApiProperty()
    reviews: Review[];

  toDto: () => ProductDto;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.methods = {
    toDto(): ProductDto {
        return {
            id: this.id,
            name: this.name,
            brand: this.brand,
            asins: this.asins,
            categories: this.categories,
            colors: this.colors,
            dateAdded: this.dateAdded,
            dateUpdated: this.dateUpdated,
            descriptions: this.descriptions,
            dimension: this.dimension,
            domains: this.domains,
            ean: this.ean,
            ean13: this.ean13,
            features: this.features,
            gtins: this.gtins,
            imageURLs: this.imageURLs,
            keys: this.keys,
            manufacturer: this.manufacturer,
            manufacturerNumber: this.manufacturerNumber,
            merchants: this.merchants,
            prices: this.prices,
            primaryCategories: this.primaryCategories,
            primaryImageURLs: this.primaryImageURLs,
            quantities: this.quantities,
            sdsURLs: this.sdsURLs,
            secondaryCategories: this.secondaryCategories,
            skus: this.skus,
            sourceURLs: this.sourceURLs,
            taxonomy: this.taxonomy,
            taxonomyLevel1: this.taxonomyLevel1,
            taxonomyLevel2: this.taxonomyLevel2,
            taxonomyLevel3: this.taxonomyLevel3,
            taxonomyLevel4: this.taxonomyLevel4,
            upc: this.upc,
            upca: this.upca,
            webstieIDs: this.webstieIDs,
            weight: this.weight,
            _v: this._v,
            sizes: this.sizes,
            taxonomyLevel5: this.taxonomyLevel5,
            count: this.count,
            agg_neg_keyphrases: this.agg_neg_keyphrases,
            agg_pos_keyphrases: this.agg_pos_keyphrases,
            top_three_keyphrases: this.top_three_keyphrases,
            wordcloud: this.wordcloud,
            to_rating: this.to_rating,
            to_likes: this.to_likes,
            to_dislikes: this.to_dislikes,
            sentiment_score: this.sentiment_score,
        }
    }
};
