import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

import { CommonService } from '../common.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { CarComponent } from './car/car.component'

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search', component: ListComponent }
];

@NgModule({
  declarations: [SearchComponent, ListComponent, FilterComponent, CarComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HomeModule {

  constructor(private service: CommonService){
    this.service.getCars();
  }
}
