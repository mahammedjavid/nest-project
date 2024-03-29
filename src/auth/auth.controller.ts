import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post ('login')
  login() {
    return this.authService.login();
  }
  @Get('signup')
  singnUp() {
    return this.authService.signUp();
  }
}
