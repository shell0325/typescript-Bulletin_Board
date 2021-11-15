import { DeleteResult } from 'typeorm';
import { createTagRequestDto } from '../dto/create-tag.request.dto';
import { TagResponseDto } from '../dto/tag.response.dto';
import { TagsResponseDto } from '../dto/tags.response.dto';
import { updateTagRequestDto } from '../dto/update-tag.request.dto';

export interface ITagService {
  createTag(param: createTagRequestDto): Promise<TagResponseDto>;
  getTag(): Promise<TagsResponseDto>;
  findTag(taskId: number): Promise<TagResponseDto>;
  updateTag(tagId: number, param: updateTagRequestDto): Promise<TagResponseDto>;
}
