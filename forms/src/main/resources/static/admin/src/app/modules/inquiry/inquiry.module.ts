import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { InquiryListComponent } from 'app/components/inquiry-list/inquiry-list.component';
import { InquiryInvitationsListComponent } from 'app/components/inquiry-invitations-list/inquiry-invitations-list.component';
import { InquiryCompactComponent } from 'app/components/inquiry-compact/inquiry-compact.component';
import { InquiryDetailComponent } from 'app/components/inquiry-detail/inquiry-detail.component';
import { InquiryComponent } from 'app/components/inquiry/inquiry.component';

import { MythemeModule } from 'app/mytheme/mytheme.module';

import { InquiryRoutingModule } from 'app/modules/inquiry/inquiry-routing.module';

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
    ThemeModule,
  ]
})
export class InquiryModule { }
