import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Habitacion } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  pathGet="assets/productos.json";
  constructor(protected  http:HttpClient) { }
 
  listarHabitaciones():Observable<Habitacion[]>{
    return this.http.get<Habitacion[]>(this.pathGet);
  }

}
