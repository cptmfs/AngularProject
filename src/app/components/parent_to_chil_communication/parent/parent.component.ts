import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <p>parent works!</p>
  <app-child [childData]="sayi"></app-child>
  `
})
export class ParentComponent {

  data: any = "Merhaba";

  sayi : number=5367911405;


}
