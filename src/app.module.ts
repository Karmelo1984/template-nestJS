import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
         type: 'postgres',

         host: process.env.DB_HOST,
         port: +process.env.DB_PORT,
         database: process.env.DB_DATABASE,
         username: process.env.DB_USERNAME,
         password: process.env.DB_PASSWORD,

         autoLoadEntities: true,
         synchronize: true, //En producción, pasar a false
      }),
   ],
})
export class AppModule {}
