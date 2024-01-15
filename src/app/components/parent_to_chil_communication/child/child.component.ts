import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>child works!</p>
  <h1>{{childData}}</h1>
  `
})
export class ChildComponent {
  @Input() childData: any;
}
