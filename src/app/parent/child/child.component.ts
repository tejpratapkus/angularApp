import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() placeHolderText: String = 'Tej';
  @Input() productSelected: boolean = false;
  @Input() productNameValue: String;
  @Output() addedProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct() {
    this.addedProduct.emit(this.productNameValue);
  }
}
