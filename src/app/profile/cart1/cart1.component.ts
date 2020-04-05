import { Component, OnInit } from '@angular/core';
//import { MessageService } from '../../appServices/message.service'
import { DesignUtilServiceService } from 'src/app/appServices/design-util-service.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {product = {};
constructor(private _msgService:DesignUtilServiceService) { }

ngOnInit(): void {
 // this.product = this._msgService.product
 this._msgService.product().subscribe(productData => this.product = productData)
}

/* btnClick() {
  const msgService = new MessageService();
  msgService.messageAlert();
} */

btnClick() {
  this._msgService.messageAlert();
}

}
