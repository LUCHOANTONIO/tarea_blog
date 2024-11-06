import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Articulo } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  pathGet="assets/articulos.json";
  constructor(protected  http:HttpClient) { }
 
  listarArticulos():Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.pathGet);
  }
}


