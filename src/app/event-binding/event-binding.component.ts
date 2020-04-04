import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  msg:String = "";
  msgCart:String = "";
  constructor() { }

  ngOnInit(): void {
  }

  onAddCart() {
      this.msg = "Product added in cart";
  }

  addInCart(event) {
    this.msgCart = event.target.value + " added in cart";
}

  getInputValue(event) {
      console.log(event);
      console.log('Text value : '+event.target.value)
  }

  inputInformation(info) {
    console.log(info.value + " : " + info.name)
  }

}
