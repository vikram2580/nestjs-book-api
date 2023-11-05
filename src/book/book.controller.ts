import { Get, Controller, Post, Body } from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './book.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(@Body() book:Book):void{
    console.log("bookd",book)
    this.booksService.createBook(book)
  }

}
