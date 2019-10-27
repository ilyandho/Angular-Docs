import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstAppComponent } from './components/first-app/first-app.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstAppComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
