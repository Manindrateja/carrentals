import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute, Params} from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, startWith} from 'rxjs/operators';

import { FormControl } from '@angular/forms';

import { Appstate } from '../../_models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  minDate = new Date();

	locationControl = new FormControl();
  dateControl = new FormControl();
	filteredOptions: Observable<string[]>;
  
  sub: Subscription = new Subscription();
  constructor(private store: Store<Appstate>, private router: Router) { }

  locations: Array<string>;

  ngOnInit() {

  	let sub1 =  this.store.select('locations').subscribe((res : any) => {
  		this.locations =  res;
      this.filteredOptions = res;
	});

	this.sub.add(sub1);

	let sub2 = this.locationControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      ).subscribe((res : any) => {
      	// console.log(res);
      	this.filteredOptions = res;
      });

    this.sub.add(sub2);

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
     let [date, location] = [ (new Date(this.dateControl.value)).getTime(), this.locationControl.value];
     this.router.navigate(['search'], { queryParams: { date, location }})
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
  }

}
