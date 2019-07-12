import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquiryComponent } from 'app/components/inquiry/inquiry.component';
import { InquiryOwnerListComponent } from 'app/components/inquiry-owner-list/inquiry-owner-list.component';

const routes: Routes = [{
  path: '',
  component: InquiryComponent,
  children: [{
    path: 'new',
    component: InquiryOwnerListComponent,
    }],
  },
  { path: '**', 
    redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }

