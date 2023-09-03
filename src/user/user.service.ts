import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './userModel';

@Injectable({})
export class UserService {
  async createUser(data: any) {
    try {
      const { name, email, password } = data;

      // Check if a user with the given email already exists
      const user = await UserModel.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        // If user doesn't exist, create a new one
        const newUser = await UserModel.create(data);
        return {
          data: newUser, // Return the newly created user data
          message: 'User created successfully',
        };
      }else{
        throw Error("User already exists, please login")
      }
    } catch (error) {
      return {
        message: error.message ? error.message : error,
      };
    }
  }
}
