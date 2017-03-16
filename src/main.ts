import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// generando a parir de un modulo 1 ng generate m movimientos 2. ng g c movimientos/movimiento
//la herramienta actualiza el modulo declarando a MovimientoComponent
//export:MovimientoComponent y luego en app.module.ts imports:MovimientosModule
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
