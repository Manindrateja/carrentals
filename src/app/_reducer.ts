import { Action } from '@ngrx/store';
import { Car } from './_models';

export const LOAD_CARS = 'LOAD_CARS';

export function CarsReducer(state: Array<Car> = [], action: Action) {

	switch (action.type) {

		case LOAD_CARS:
			return action['payload'];
		
		default:
			return state;
	}

}

export const LOAD_LOCATION = 'LOAD_LOCATION';
export function LocationReducer(state: Array<string> = [], action: Action) {

	switch (action.type) {

		case LOAD_LOCATION:
			return action['payload'];
		
		default:
			return state;
	}

}

