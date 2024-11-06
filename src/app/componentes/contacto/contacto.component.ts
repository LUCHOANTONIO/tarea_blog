import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  nombre:string="";
  correo:string="";
  telefono:string="";
  mensaje:string="";
  enviarMensaje(){
      //let mensaje=document.getElementById("mensaje");
      //alert(this.mensaje);
      window.open('https://wa.me/+59168212240/?text='+
                  ' Mi nombre es '+this.nombre+
                  ' mi telefono es: '+this.telefono+
                  ' y mi correos es:'+this.correo+
                  ' Mensaje: '+ this.mensaje, '_blank');
  }
}
