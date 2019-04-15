import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGlobalComponent } from 'app/components/user-global/user-global.component';
import { UserDetailComponent } from 'app/components/user-detail/user-detail.component';

@NgModule({
  declarations: [
	user-global,
	user-detail
	],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
