import { Component } from '@angular/core';
import { HabitacionService } from 'src/app/habitacion.service';
import { Habitacion } from 'src/app/interface';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss']
})
export class HabitacionComponent {

  lstHabitaciones:Habitacion[]=[];
  constructor(protected habitacionService:HabitacionService) {  }

  ngOnInit():void{
    this.mostrarHabitaciones();
  }

  mostrarHabitaciones(){
   this.habitacionService.listarHabitaciones().subscribe(res=>{this.lstHabitaciones=res;});
  }
}
