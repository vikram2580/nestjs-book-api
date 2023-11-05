import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { BooksController } from './book/book.controller';
import { BooksService } from './book/book.service';

@Module({
  imports: [BookModule],
  controllers: [BooksController,AppController],
  providers: [AppService,BooksService],
})
export class AppModule {}
