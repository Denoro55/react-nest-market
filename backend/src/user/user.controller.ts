import { Controller, Get } from '@nestjs/common';

import { MOCK_USER } from './mocks';

@Controller('user')
export class UserController {
  @Get('/')
  getUser() {
    return MOCK_USER;
  }
}
