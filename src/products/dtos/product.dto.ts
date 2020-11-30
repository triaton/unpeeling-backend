import { ApiProperty } from '@nestjs/swagger';


export class ProductDto {

    @ApiProperty()
    id: string;
  
    @ApiProperty()
    asins: string;

    @ApiProperty()
    brand: string;

    @ApiProperty()
    name: string;
  
    @ApiProperty()
    categories: { name: string };

    @ApiProperty()
    colors: { name: string };

    @ApiProperty()
    dateAdded: string;

    @ApiProperty()
    dateUpdated: string;

    @ApiProperty()
    descriptions: { dateSeen: string, value: string, sourceURLs: { name: string }};

    @ApiProperty()
    dimension: string;

    @ApiProperty()
    domains: { name: string };

    @ApiProperty()
    ean: { name: string };

    @ApiProperty()
    ean13: string;

    @ApiProperty()
    features: { value: { name: string }, key: string};

    @ApiProperty()
    gtins: { name: string };

    @ApiProperty()
    imageURLs: { name: string };

    @ApiProperty()
    keys: { name: string };

    @ApiProperty()
    manufacturer: string;

    @ApiProperty()
    manufacturerNumber: string;

    @ApiProperty()
    merchants: { dateSeen: string, name: string };

    @ApiProperty()
    prices: { 
              amountMax: number, amountMin: number, availability: string, 
              currency: string, dateSeen: { name: string }, isSale: string, 
              sourceURLs: { name: string }, merchant: string, returnPolicy: 
              string, shipping: string, offer: string, condition: string
    };

    @ApiProperty()
    primaryCategories: { name: string };

    @ApiProperty()
    primaryImageURLs: { name: string };

    @ApiProperty()
    quantities: { value: string, sourceURLs: { name: string }, dateSeen: { name: string }};

    @ApiProperty()
    sdsURLs: { name: string };

    @ApiProperty()
    secondaryCategories: { name: string };

    @ApiProperty()
    skus: { value: string, sourceURLs: { name: string }};

    @ApiProperty()
    sourceURLs: { name: string };

    @ApiProperty()
    taxonomy: { name: string };

    @ApiProperty()
    taxonomyLevel1: { name: string };
        
    @ApiProperty()
    taxonomyLevel2: { name: string };

    @ApiProperty()
    taxonomyLevel3: { name: string };

    @ApiProperty()
    taxonomyLevel4: { name: string };

    @ApiProperty()
    upc: { name: string };

    @ApiProperty()
    upca: string;

    @ApiProperty()
    webstieIDs: { name: string };

    @ApiProperty()
    weight: string;

    @ApiProperty()
    _v: string;

    @ApiProperty()
    sizes: { name: string };

    @ApiProperty()
    taxonomyLevel5: { name: string };

    @ApiProperty()
    count: string;

    @ApiProperty()
    agg_neg_keyphrases: { name: string };

    @ApiProperty()
    agg_pos_keyphrases: { name: string };

    @ApiProperty()
    top_three_keyphrases: { name: string };

    @ApiProperty()
    wordcloud: { name: string };

    @ApiProperty()
    to_rating: number;

    @ApiProperty()
    to_likes: number;
    
    @ApiProperty()
    to_dislikes: number;

    @ApiProperty()
    sentiment_score: number;
  }
  