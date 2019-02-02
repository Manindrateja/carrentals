import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatMomentDateModule } = require("");

import {MatButtonModule, MatIconModule, MatToolbarModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
})
export class SharedModule { }
