import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  proSelected: boolean = false;
  proNameValue: String = "";
  addedProduct: any
  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(productName) {
    this.proSelected = true;
    console.log(productName);
    this.proNameValue = productName;
  }

  onAddedProduct(product) {
    this.addedProduct = product;
  }

}
