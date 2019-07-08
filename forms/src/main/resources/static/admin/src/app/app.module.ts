/**
 * @license
 * Copyright Nyx-Embedded Intelligence. All Rights Reserved.
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
import { HomeModule } from './modules/home/home.module';
import { MythemeModule } from './mytheme/mytheme.module';
import { InquiryOwnerListComponent } from './components/inquiry-owner-list/inquiry-owner-list.component';


@NgModule({
  declarations: [AppComponent, InquiryOwnerListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
	
	ReportModule,
	ClusterModule,
	InquiryModule,
	StatisticModule,
	FormModule,
	UserModule,
        HomeModule,
        MythemeModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
