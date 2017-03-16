import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientoComponent } from './movimiento/movimiento.component';
// generando a parir de un modulo 1 ng generate m movimientos 2. ng g c movimientos/movimiento
//la herramienta actualiza el modulo declarando a MovimientoComponent
//export:MovimientoComponent y luego en app.module.ts imports:MovimientosModule
//webcomponent.org
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovimientoComponent]
})
export class MovimientosModule { }
