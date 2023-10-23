import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ 
    //P04hAYHZEJ5Elnv1   //emonsourov
  MongooseModule.forRoot('mongodb+srv://emonsourov:P04hAYHZEJ5Elnv1@cluster0.cjmj8se.mongodb.net/?retryWrites=true&w=majority'),
   ProductModule, 
   UserModule, 
   AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
