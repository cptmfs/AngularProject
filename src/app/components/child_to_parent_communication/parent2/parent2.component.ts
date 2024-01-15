import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template:`
  
  <app-child2 (dataEvent)="childEvent($event)"></app-child2>
  
  
  `
})
export class Parent2Component {


  childEvent(obj:any){
    debugger;
  }
}
