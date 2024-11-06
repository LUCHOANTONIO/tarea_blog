import { Component } from '@angular/core';
import { ArticuloService } from 'src/app/articulo.service';
import { Articulo } from 'src/app/interface';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  lstArticulos:Articulo[]=[];
  constructor(protected articuloService:ArticuloService) {  }

  ngOnInit():void{
    this.mostrarArticulos();
  }

  mostrarArticulos(){
   this.articuloService.listarArticulos().subscribe(res=>{this.lstArticulos=res;});
  }
}