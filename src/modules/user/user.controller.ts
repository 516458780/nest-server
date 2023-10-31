import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    return this.userService.register(registerDTO);
  }
}
