import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../_models';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

	@Input()
	car: Car;

	@Input()
	disabled: boolean;

	@Output()
	onSelect: EventEmitter<Car> = new EventEmitter();

	selected: boolean = false;

	constructor() { }

	ngOnInit() {
	}
}
