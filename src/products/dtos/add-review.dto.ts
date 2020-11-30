import { ApiProperty } from "@nestjs/swagger";

export class AddReviewDto {
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