import { IsNumber, IsString } from 'class-validator';

export class NewKwangDto {
  @IsString()
  deviceId: string;
  @IsNumber()
  timestamp?: number;
}
