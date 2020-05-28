import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() displayAddProductsForm = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  showPopUp(event) {
    this.displayAddProductsForm.emit(true);
  }
}
