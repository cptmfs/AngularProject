import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomIfDirective } from './directives/custom-if.directive';
import { CustomForDirective } from './directives/custom-for.directive';
import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomIfDirective,
    CustomForDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [{provide:DEFAULT_CURRENCY_CODE,useValue:'₺'},CustomPipe,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
