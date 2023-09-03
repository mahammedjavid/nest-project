import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel } from './userModel';

const userProviders = [
  {
    provide: 'USER_MODEL',
    useValue: UserModel
  },
];

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders]
})
export class UserModule {}
