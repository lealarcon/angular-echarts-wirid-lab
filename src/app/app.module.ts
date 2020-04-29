import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
     HttpClientModule,
      RouterModule.forRoot([])
      ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}]
})
export class AppModule { }
