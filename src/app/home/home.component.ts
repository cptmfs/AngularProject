import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template:`
  
  <h1>{{pageName}}</h1>
  
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
ad='Muhammed  Ferit';
soyad='Simsek';
@Input() pageName:string;
}
