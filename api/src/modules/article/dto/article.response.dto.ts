import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Article } from 'src/database/entities/article.entity';

export class ArticleResponseDto {
  @IsNotEmpty()
  @ApiProperty()
  article: Article;
}
