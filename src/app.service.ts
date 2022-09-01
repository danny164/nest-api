import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFullName(id: string): string {
    if (id === '23111998') return 'Nguyen Van Quynh';
    return 'Fullname Hidden!';
  }
}
