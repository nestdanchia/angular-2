import { MovimientosModule } from './movimientos/movimientos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// desde cmd powershell
import { AppComponent } from './app.component';

// para crear un componente en una carpeta hay que dar su ruta ng g c movimientos/nuevo
// si creo un componente con ng g c pepe este sera hijo de app y hermano de MovimientosComponent
// el entorno incluira automaticamente lo anota como una declaracion mas 
// dentro del modulo principal en app.module.ts en declarations a PepeComponent
// asi sera conocido por cualquier componente del modulo principal puedo usar su vista en app.component.html
// creamos luego desde la raiz de la aplicacion ng generate c movimientos/nuevo
// asi NuevoComponent se declara automaticamente en movimientos.module.ts puedo utilizarlo en ese modulo
// si quiero usarlo fuera de ese modulo debo exportarlo exports:[NuevoComponente]
// como el modulo movimientos EN ESTE CASO se creo con ng g m MovimientosModule
// debo importarlo al modulo app.module.ts import { MovimientosModule } from './movimientos/movimientos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
