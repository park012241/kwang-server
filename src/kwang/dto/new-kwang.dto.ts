import { IsDateString, IsOptional, IsString } from 'class-validator';

export class NewKwangDto {
  @IsString()
  deviceId: string;
  @IsOptional()
  @IsDateString()
  timestamp?: string;
}
