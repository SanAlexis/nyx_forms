import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldNwComponent } from 'app/components/form-field-nw/form-field-nw.component';
import { FormFieldListComponent } from 'app/components/form-field-list/form-field-list.component';
import { FormNameFieldComponent } from 'app/components/form-name-field/form-name-field.component';

@NgModule({
  declarations: [
	FormFieldNwComponent,
	FormFieldListComponent,
	FormNameFieldComponent
	],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
