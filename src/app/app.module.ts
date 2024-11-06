import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/compartido/header/header.component';
import { NavbarComponent } from './componentes/compartido/navbar/navbar.component';
import { HabitacionComponent } from './componentes/habitacion/habitacion.component';
import { FooterComponent } from './componentes/compartido/footer/footer.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { SliderComponent } from './componentes/slider/slider.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HabitacionService } from './habitacion.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloService } from './articulo.service';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HabitacionComponent,
    FooterComponent,
    SliderComponent,
    InicioComponent,
    BlogComponent,
    ContactoComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HabitacionService,ArticuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
