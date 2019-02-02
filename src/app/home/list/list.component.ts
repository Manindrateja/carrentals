import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params} from '@angular/router';
import { Subscription }  from 'rxjs';

import { Store } from '@ngrx/store';
import { Appstate, Car } from '../../_models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	sub: Subscription = new Subscription();

	filter: any;

	filters: any = {
		Transmission: [],
		Car_Type: [],
		Fuel_Type: []
	};

	cars: Array<Car>;
	allCars: Array<Car>;
	displayCars: Array<Car>;

	constructor(private store: Store<Appstate>, private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {

		let sub1 = this.activatedRoute.queryParams.subscribe((params: Params) => {
			this.filter = params;
		});

		this.sub.add(sub1);

		let sub3 = this.store.select('cars').subscribe(res => {
			this.allCars = res;
			// this.cars = res;
			this.filterCars();
		});

		this.sub.add(sub3);
	}

	onfilter(event){
		
		this.displayCars = this.cars.filter( car => {
				
			let r = true;	
			for(let key in event){
				if(event[key].length){
					r = r && event[key].includes(car[key]);
				}
			}

			return r;

		});
		this.onSort(this.sort);
	}

	sort: number = 1;
	onSort(sort: number){
		//console.log(this.displayCars);
		this.displayCars = this.displayCars.sort((a,b) => (a.Price - b.Price) * sort);
	}

	days = [ 'Sun' , 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	filterCars(){

		this.cars = this.allCars.filter(car => {
			
			if('location' in this.filter && car.Location !== this.filter.location)
				return false;
			
			if('date' in this.filter){
				let d = Number(this.filter.date);
				if(Number.isInteger(d)){
					let index =	(new Date(d)).getDay();	
					return car.Availability.includes(this.days[index])
				}
			}
			return true;
		});
		this.displayCars = Object.assign([], this.cars);
		this.onSort(this.sort);

	}

	selectedCars: Array<Car> = [];
	onCarSelected(event){

		let cars = this.selectedCars.filter(car => car.Name !== event.Name);
		if(cars.length === this.selectedCars.length)
			this.selectedCars.push(event);
		else
			this.selectedCars = cars;

	}

}
