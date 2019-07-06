import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryListComponent } from 'app/components/inquiry-list/inquiry-list.component';
import { InquiryInvitationsListComponent } from 'app/components/inquiry-invitations-list/inquiry-invitations-list.component';
import { InquiryCompactComponent } from 'app/components/inquiry-compact/inquiry-compact.component';
import { InquiryDetailComponent } from 'app/components/inquiry-detail/inquiry-detail.component';
import { InquiryComponent } from 'app/components/inquiry/inquiry.component';

import { MythemeModule } from 'app/mytheme/mytheme.module';

@NgModule({
  declarations: [
	InquiryListComponent,
	InquiryInvitationsListComponent,
	InquiryCompactComponent,
	InquiryDetailComponent,
        InquiryComponent,
	],
  imports: [
    CommonModule,
    MythemeModule,
  ]
})
export class InquiryModule { }
