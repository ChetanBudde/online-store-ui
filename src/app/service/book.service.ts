import { Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Book } from '../pojo/Book'

@Injectable()
export class BookService{
    bookUrl : string = 'http://localhost:9000/online-store/products';
    
    constructor(private httpClient : HttpClient){

    }

    getBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.bookUrl);
    }
}