import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
