import { Component, Input,OnInit } from '@angular/core';
import { Articulo } from '../../interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit{
  @Input() art?:Articulo;
  @Input() prefijo_modal:string="";
  
  constructor() {
    
  }

  ngOnInit(): void {
    
  }


}
