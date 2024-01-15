import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './components/parent_to_chil_communication/parent/parent.component';
import { ChildComponent } from './components/parent_to_chil_communication/child/child.component';
import { Parent2Component } from './components/child_to_parent_communication/parent2/parent2.component';
import { Child2Component } from './components/child_to_parent_communication/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
