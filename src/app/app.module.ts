import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './products/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './products/filter/filter.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductComponent } from './products/products-list/product/product.component';
import { ButtonComponent } from './commons/button/button.component';
import { ProductActionsComponent } from './products/product-actions/product-actions.component';
import { Ng5SliderModule } from 'ng5-slider';
import { RatingComponent } from './commons/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FilterComponent,
    ProductsListComponent,
    ProductComponent,
    ButtonComponent,
    ProductActionsComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
