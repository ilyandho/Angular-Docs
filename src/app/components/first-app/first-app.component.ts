import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent implements OnInit {
  products = [
    {name:'First Product', desc:'This is the first product here',price:'1600'},
    {name:'second Product', desc:'This is the second product here',price:'1000'},
    {name:'third Product', desc:'This is the third product here',price:'600'},
    {name:'fourth Product', desc:'This is the fourth product here',price:'2800'},
    {name:'fifth Product', desc:'This is the fifth product here',price:'800'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
