import { ApiProperty } from '@nestjs/swagger';


export class ProductTab1Dto {

    @ApiProperty()
    id: string;
  
    @ApiProperty()
    name: string;
  
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
  