import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent implements OnInit {
  products = [
    {name:'First Product', description:'This is the first product here',price:'1600'},
    {name:'second Product', description:'This is the second product here',price:'1000'},
    {name:'third Product', description:'This is the third product here',price:'600'},
    {name:'fourth Product', description:'This is the fourth product here',price:'2800'},
    {name:'fifth Product', description:'This is the fifth product here',price:'800'}
  ]
  
  share(){
    console.log('The product has been share')
  }

  onNotify(){
    console.log('You will be notified when the product goes on sale')
  }
  constructor() { }

  ngOnInit() {
  }

}
