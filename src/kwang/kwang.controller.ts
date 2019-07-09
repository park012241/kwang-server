import { Body, Controller, Get, Param, Put, ValidationPipe } from '@nestjs/common';
import { KwangService } from './kwang.service';
import { NewKwangDto } from './dto/new-kwang.dto';
import { Kwang } from './class/kwang.class';

@Controller('kwang')
export class KwangController {
  private readonly kwangService: KwangService;

  constructor() {
    this.kwangService = new KwangService();
  }

  @Put()
  async newKwang(@Body(new ValidationPipe({ transform: true })) newKwang: NewKwangDto) {
    return this.kwangService.newKwang(new Kwang(newKwang));
  }

  @Get()
  async getKwang(@Param('deviceId') deviceId: string) {
    return deviceId ? await this.kwangService.getKwang(deviceId) : [];
  }
}
