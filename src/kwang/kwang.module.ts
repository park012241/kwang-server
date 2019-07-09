import { Module } from '@nestjs/common';
import { KwangController } from './kwang.controller';
import { KwangService } from './kwang.service';

@Module({
  controllers: [KwangController],
  providers: [KwangService],
})
export class KwangModule {
}
