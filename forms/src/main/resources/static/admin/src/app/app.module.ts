/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReportModule } from './modules/report/report.module';
import { ClusterModule } from './modules/cluster/cluster.module';
import { InquiryModule } from './modules/inquiry/inquiry.module';
import { StatisticModule } from './modules/statistic/statistic.module';
import { FormModule } from './modules/form/form.module';
import { UserModule } from './modules/user/user.module';

import { InquiryListComponent } from './components/inquiry-list/inquiry-list.component';
import { InquiryInvitationsListComponent } from './components/inquiry-invitations-list/inquiry-invitations-list.component';
import { InquiryCompactComponent } from './components/inquiry-compact/inquiry-compact.component';
import { InquiryDetailComponent } from './components/inquiry-detail/inquiry-detail.component';
import { UserGlobalComponent } from './components/user-global/user-global.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ClusterTreeComponent } from './components/cluster-tree/cluster-tree.component';
import { ClusterDetailComponent } from './components/cluster-detail/cluster-detail.component';
import { ClusterIdSettingComponent } from './components/cluster-id-setting/cluster-id-setting.component';
import { ClusterButtonsComponent } from './components/cluster-buttons/cluster-buttons.component';
import { StatisticListComponent } from './components/statistic-list/statistic-list.component';
import { StatisticDetailComponent } from './components/statistic-detail/statistic-detail.component';
//import { FormFieldNewComponent } from './components/form-field-new/form-field-new.component';
import { FormFieldListComponent } from './components/form-field-list/form-field-list.component';
import { FormNameFieldComponent } from './components/form-name-field/form-name-field.component';
import { ReportGlobalComponent } from './components/report-global/report-global.component';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';
//import { ReportNewFieldComponent } from './components/report-new-field/report-new-field.component';
import { ReportStatisticListComponent } from './components/report-statistic-list/report-statistic-list.component';
import { FormFieldNwComponent } from './components/form-field-nw/form-field-nw.component';
import { ReportNwFieldComponent } from './components/report-nw-field/report-nw-field.component';


@NgModule({
  declarations: [AppComponent, InquiryListComponent, InquiryInvitationsListComponent, InquiryCompactComponent, InquiryDetailComponent, UserGlobalComponent, UserDetailComponent, ClusterTreeComponent, ClusterDetailComponent, ClusterIdSettingComponent, ClusterButtonsComponent, StatisticListComponent, StatisticDetailComponent, FormFieldListComponent, FormNameFieldComponent, ReportGlobalComponent, ReportDetailComponent, ReportStatisticListComponent, FormFieldNwComponent, ReportNwFieldComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
	ReportModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
