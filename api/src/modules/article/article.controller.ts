import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ApiErrorResponse } from 'src/common/decoraters';
import {
  CommonResponse,
  CreatedResponse,
  NotFoundResponse,
  OkResponse,
  UnAuthorizedResponse,
} from 'src/common/types/response';
import { ArticleService } from './article.service';
import { createArticleRequestDto } from './dto/create-article.request.dto';
import { ArticleResponseDto } from './dto/article.response.dto';
import { ArticlesResponseDto } from './dto/articles.response.dto';
import { updateArticleRequestDto } from './dto/update-article.request.dto';
import { DeleteResult } from 'typeorm';
import { TagResponseDto } from '../tag/dto/tag.response.dto';
import { ArticleTagResponseDto } from './dto/article-tag.response.dto';

@ApiTags('articles')
@Controller('articles')
@ApiExtraModels(ApiUnauthorizedResponse, NotFoundException)
@ApiErrorResponse(UnAuthorizedResponse)
@ApiErrorResponse(NotFoundResponse)
export class ArticleController {
  constructor(private readonly _articleService: ArticleService) {}

  @Post()
  async createArticle(@Body() param: createArticleRequestDto) {
    let responseData: ArticleResponseDto;

    responseData = await this._articleService.createArticle(param);

    return new CreatedResponse(responseData);
  }

  @Get()
  async getArticles() {
    let responseData: ArticlesResponseDto;

    responseData = await this._articleService.getArticles();

    return new OkResponse(responseData);
  }

  @Get(':articleId')
  async findArticle(@Param('articleId') articleId: number) {
    let responseData: ArticleResponseDto;

    responseData = await this._articleService.findArticle(articleId);

    return new OkResponse(responseData);
  }

  @Put(':articleId')
  async updateArticle(
    @Param('articleId') articleId: number,
    @Body() param: updateArticleRequestDto,
  ) {
    let responseData: ArticleResponseDto;

    responseData = await this._articleService.updateArticle(articleId, param);

    return new OkResponse(responseData);
  }

  @Delete(':articleId')
  async deleteArticle(@Param('articleId') articleId: number) {
    let responseData: DeleteResult;

    responseData = await this._articleService.deleteArticle(articleId);

    return new OkResponse(responseData);
  }

  @Post('tags')
  async joinTag(@Body() param: TagResponseDto) {
    let responseData: ArticleTagResponseDto;

    responseData = await this._articleService.joinTag(param);

    return new OkResponse(responseData);
  }

  @Delete(':articleId/tags/:tagId')
  async releaseTag(
    @Param('article') articleId: number,
    @Param('tagId') tagId: number,
  ) {
    let responseData: DeleteResult;

    responseData = await this._articleService.releaseTag(articleId, tagId);

    return new OkResponse(responseData);
  }
}
