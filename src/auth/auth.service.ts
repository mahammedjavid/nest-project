import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return {
      message: 'login',
    };
  }
  signUp() {
    return {
      message: 'signup'
    };
  }
}
