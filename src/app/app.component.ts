import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `


  <!-- Text Interpolation
  <h1>{{title}}</h1> -->


  <!-- Property Binding
  <input type="text" [value]="title">
  <img [src]="src" alt="">
  <app-home [pageName]="title"></app-home> -->


  <!-- Event Binding
  <input (keydown.shift.a)="sayfaUyarisi()">
   -->


  <!-- Two-Way Data Binding
   <input type="text" [(ngModel)]="name">
   <h1>{{name}}</h1>
  -->

  <!-- Attribute Binding
  <button type="submit" class="btn btn-primary" [disabled]="disabled">Tıkla</button>
  -->
 <!-- <p>{{sayi+sayi}}</p>
{{html}}
<p ngNonBindable>{{html}} merhaba</p>
<p>{{person?.name}}</p> -->


<!-- Directive -->
<!-- 
<div *ngFor="let ad of isimler let i =index
                               let first=first">{{ad}}  {{i}}  {{first}}</div>
<ul>
  <li *ngFor="let ad of isimler">{{ad}}</li>
</ul> -->
<!--             IF YAPISI
<div *ngIf="disabled; else elseMessage">merhaba</div>
<ng-template #elseMessage>
  hatalıdır
</ng-template> -->


<!--          ELSE IF YAPISI
<div *ngIf="sayi==1; else elseMessage">merhaba</div>
<ng-template #elseMessage>
<div *ngIf="sayi==2; else elseMessage2">hatalıdır</div>
</ng-template>
<ng-template #elseMessage2>
içerik boş
</ng-template> -->



<!--        SWITCH CASE YAPISI
  <div [ngSwitch]="sayi">
    <div *ngSwitchCase="1">sayi 1</div>
    <div *ngSwitchCase="2">sayi 2</div>
    <div *ngSwitchDefault>sayi 1 yada 2 degildir.</div>
  </div> 
-->

          <!-- CUSTOM DİRECTİVE -->

          <div *appCustomIf="false"> SELAMLAR    </div>
       <ul>
        <li *appCustomFor="names;let name; let index = index ">{{name | lowercase}} - {{index | currency :'₺'}}</li>
       </ul>
      <p>{{isim | slice:3:7}}</p>
<h1>{{tarih|date }}</h1>
<button [ngClass]="myClass">BUTONDUR</button>

<hr>
<br>

{{"fenerin maçı var." | custom:0:5}}
  `,
  // styleUrl: './app.component.css'
  styles: [".myClass{background-color:red;}"]
})
export class AppComponent {

  constructor(private custom:CustomPipe){
    console.log(custom.transform("asdlkasjhfkjahnc aknsckjlasnskasa",3,10));
  }
  title = 'AngularProjectWithModule';
  src: string = "https://lh3.googleusercontent.com/a/ACg8ocK78hMmJPOjE4Dr4lyQd3-TtrOB9Fh0HFoj4lu8tAclb68=s288-c-no";
  sayfaUyarisi() {
    alert("Merhaba ben Muhammed Ferit Şimşek");
  }
  name: string;
  disabled: boolean = false;
  sayi: number = 3;
  html: String = "<h1>merhaba</h1>";
  person: { name, surname } = { name: "Muhammed Ferit", surname: "Şimşek" }
  isimler: string[] = ["Ferit", "Şeyma", "Şevval", "Tahir", "Naim"]
  class1: string = "btn btn-primary";
  class2: string = "btn btn-danger";
  myClass: string = "myClass";
  names : string[]= ["Ferit","Ali","Tahir","Naim"];
  isim : string = "ferit simsek"
  tarih : Date= new Date(2024,12,1);
}
