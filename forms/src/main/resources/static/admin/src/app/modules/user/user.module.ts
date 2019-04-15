import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGlobalComponent } from 'app/components/user-global/user-global.component';
import { UserDetailComponent } from 'app/components/user-detail/user-detail.component';

@NgModule({
  declarations: [
	UserGlobalComponent,
	UserDetailComponent
	],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
