import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MachinesModule } from './components/machines/machines.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MachinesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
