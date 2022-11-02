import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { LibrosPageRoutingModule } from './libros-routing.module';
import { LibrosPage } from './libros.page';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LibrosPage, FormularioLibroComponent],
  providers: [
    ToastController
  ]
})
export class LibrosPageModule {}
