import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Appstate, Car } from './_models';

import { LOAD_CARS, LOAD_LOCATION } from './_reducer';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private store: Store<Appstate>) { }

  getCars() {
  		fetch('../assets/cars.json')
  		.then(res => res.json())
  		.then(res => {
  			let l = res.map(r => r.Location);
  			this.store.dispatch({ type: LOAD_LOCATION, payload: Array.from(new Set(l)) });
  			this.store.dispatch({ type: LOAD_CARS, payload: res});
  		});
  }
}
