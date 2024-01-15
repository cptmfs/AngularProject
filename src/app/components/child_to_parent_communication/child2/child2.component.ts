import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  
  <h1>burası childcomponent</h1>
  
  `
})
export class Child2Component implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({ message: 'Merhaba Ferit' })

  }

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();


}
