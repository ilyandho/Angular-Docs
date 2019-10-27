import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { FirstAppComponent } from './components/first-app/first-app.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstAppComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:FirstAppComponent},
      {path:'products/:productId',component:ProductDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
