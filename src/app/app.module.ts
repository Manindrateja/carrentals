import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { Router } from './router/router.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { CommonService } from './common.service';


import { CarsReducer, LocationReducer} from './_reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Router,
    SharedModule,
    StoreModule.forRoot({ 
    	cars: CarsReducer,
      locations: LocationReducer
    }),

  ],
  exports: [RouterModule],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
