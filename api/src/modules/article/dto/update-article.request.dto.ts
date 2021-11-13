import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class updateArticleRequestDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;
}
