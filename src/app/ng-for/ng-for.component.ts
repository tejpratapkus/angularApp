import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  productList = [
    { productName: 'Laptop', productImage: '', productPrice: 50000, productDesc: 'xya' },
    { productName: 'Mobile', productImage: '', productPrice: 25000, productDesc: 'xyaglhk' },
    { productName: 'Camera', productImage: '', productPrice: 30000, productDesc: 'xyaiyit' },
    { productName: 'Charger', productImage: '', productPrice: 500, productDesc: 'xyfhffa' }
  ];

  users = [];

  createUser(uname) {
    this.users.push({
      name: uname.value
    });

    if(this.users.length > 3) {
      this.router.navigate(['product']);
    }
  }

  deleteUser(userName) {
    this.users.splice(this.users.length - 1);
  }

  removeUser(item) {
    this.users.splice(item, 1);
  }

}
