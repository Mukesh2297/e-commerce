import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public productCategory: string[];

  constructor(private pdtService: ProductsService) {
    this.productCategory = pdtService.productCategory;
   }

  ngOnInit(): void {
  }

}
