import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';





@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    SharedModule

   ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
