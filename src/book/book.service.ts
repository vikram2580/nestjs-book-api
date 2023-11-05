import { Injectable } from "@nestjs/common";
import { Book } from "./book.entity";

@Injectable()
export class BooksService {
    private readonly books: Book[] = [];
    getAllBooks(): Book[] {
        return this.books
    };
    createBook(book: Book): void {
        this.books.push(book)
    }
}