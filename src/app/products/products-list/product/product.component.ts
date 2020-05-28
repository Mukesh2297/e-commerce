import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() pdt: {imageSource: string, productTitle: string, productPrice: string};

  constructor() { }

  ngOnInit(): void {

    console.log(this.pdt);
  }

}
