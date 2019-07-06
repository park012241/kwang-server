import { Injectable } from '@nestjs/common';
import { Database } from '../common/class/database/database.class';
import { Kwang } from './class/kwang.class';

@Injectable()
export class KwangService {
  private readonly kwangs: Database<any>;

  async newKwang(kwang: Kwang) {
    return;
  }
}
