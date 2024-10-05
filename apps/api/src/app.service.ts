import { Injectable } from '@nestjs/common'
import { add } from '@autospace/simple-lib'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + add(10, 8)
  }
}
