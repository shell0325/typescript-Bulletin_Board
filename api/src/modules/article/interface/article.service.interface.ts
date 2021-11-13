import { DeleteResult } from 'typeorm';
import { createArticleRequestDto } from '../dto/create-article.request.dto';
import { ArticleResponseDto } from '../dto/article.response.dto';
import { ArticlesResponseDto } from '../dto/articles.response.dto';
import { updateArticleRequestDto } from '../dto/update-article.request.dto';
import { TagResponseDto } from 'src/modules/tag/dto/tag.response.dto';
import { ArticleTagResponseDto } from '../dto/article-tag.response.dto';

export interface IArticleService {
  createArticle(param: createArticleRequestDto): Promise<ArticleResponseDto>;
  getArticles(): Promise<ArticlesResponseDto>;
  findArticle(articleId: number): Promise<ArticleResponseDto>;
  updateArticle(
    articleId: number,
    param: updateArticleRequestDto,
  ): Promise<ArticleResponseDto>;
  joinTag(param: TagResponseDto): Promise<ArticleTagResponseDto>;
}
