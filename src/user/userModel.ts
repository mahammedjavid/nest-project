import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class UserModel extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;
}