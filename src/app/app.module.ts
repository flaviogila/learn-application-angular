import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorIncrementoComponent } from './contador-incremento/contador-incremento.component';
import { ContadorDecrementoComponent } from './contador-decremento/contador-decremento.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorIncrementoComponent,
    ContadorDecrementoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
