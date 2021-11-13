import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class createUserRequestDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
