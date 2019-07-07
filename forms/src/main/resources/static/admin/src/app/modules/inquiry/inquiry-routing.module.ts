import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquiryComponent } from 'app/components/inquiry/inquiry.component';

const routes: Routes = [{
  path: '',
  component: InquiryComponent,
  children: [{
    path: 'new',
    component: InquiryComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }

