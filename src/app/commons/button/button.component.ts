import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickHandler(event) {
    this.buttonClick.emit(event);
  }
}
