import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

	@Input()
	filter: any = {
		Transmission: [],
		Car_Type: [],
		Fuel_Type: []
	};

	@Output()
	onfilter: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() {

	}

	selectionChange(event){
		// console.log(this.filter);
		this.onfilter.emit(this.filter);
	}

}
