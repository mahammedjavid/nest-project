import { Sequelize } from 'sequelize-typescript';
import { UserModel } from 'src/user/userModel';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        database: 'nest-practice',
      });
      sequelize.addModels([UserModel]);
      await sequelize.sync({ force: false });
      console.log('databse connection established');
      return sequelize;
    },
  },
];
