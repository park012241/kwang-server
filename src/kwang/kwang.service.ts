import { Injectable } from '@nestjs/common';
import { Database } from '../common/class/database/database.class';
import { Kwang } from './class/kwang.class';

@Injectable()
export class KwangService {
  private readonly kwangs: Database<Kwang>;

  async newKwang(kwang: Kwang) {
    await this.kwangs.insert(kwang);
    return;
  }

  async getKwang(deviceId: string) {
    return this.kwangs.find({ deviceId });
  }
}
