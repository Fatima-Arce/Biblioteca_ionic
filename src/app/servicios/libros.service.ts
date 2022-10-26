import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro-interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url: string = "http://localhost:3000/libros";

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }

}
