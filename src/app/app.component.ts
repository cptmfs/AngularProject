import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  
  <app-parent2></app-parent2>
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProjectWithModule';
}
