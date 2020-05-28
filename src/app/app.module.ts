import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './products/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './products/filter/filter.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductComponent } from './products/products-list/product/product.component';
import { ButtonComponent } from './commons/button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FilterComponent,
    ProductsListComponent,
    ProductComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
