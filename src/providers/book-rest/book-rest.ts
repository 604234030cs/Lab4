import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../models/book.models';
//import{ Book } from './../../models/book.model';

@Injectable()
export class BookRestProvider {

  private url:string="https://bookshop-v.herokuapp.com";

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }

  getbooksList():Observable<any>{
    return this.http.get<Book>(this.url + '/books');

  }

}
