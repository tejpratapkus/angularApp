import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { LoginCompComponent } from './login-comp/login-comp.component';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  /* value:String;
   constructor() { }
 
   ngOnInit(): void {
   }
 
   submitValue(val) {
     this.value = val.value;
   }*/

  //view child
  userName = "Tej";
  searchInput: String = '';
  @ViewChild('box') box: ElementRef;
  @ViewChild(LoginCompComponent) child: LoginCompComponent;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    //var num = 1;
    $(window).scroll(function () {
      // num = num + 1;
      //console.log(num);
      console.log('scrollinng');
    });
  }

  @HostListener('click') myClick() {
    //alert('clicked');
  }

  @HostListener('window:scroll', ['$event']) myScroll() {
    //alert('scroll');
  }

  ngAfterViewInit() {
    //console.log(this.box);
    //this.box.nativeElement.style.backgroundColor = "blue";
    // this.box.nativeElement.innerHTML = "blue";
    // console.log(this.child);

    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white');

  }

  changeChildProperty() {
    this.child.inputValue = "Tejpratap"
  }

  callChildMethod() {
    this.child.submitValue();
  }

  usersArr = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz"
    }
  ]

}
