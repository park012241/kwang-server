import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KwangModule } from './kwang/kwang.module';

@Module({
  imports: [KwangModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
