import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportGlobalComponent } from 'app/components/report-global/report-global.component';
import { ReportDetailComponent } from 'app/components/report-detail/report-detail.component';
import { ReportNwFieldComponent } from 'app/components/report-nw-field/report-nw-field.component';
import { ReportStatisticList } from 'app/components/report-statistic-list/report-statistic-list.component';

@NgModule({
  declarations: [
	  ReportGlobalComponent,
  	  ReportDetailComponent, 
	  ReportNwFieldComponent,
	  ReportStatisticList
  		],
  imports: [
    CommonModule
  ]
})
export class ReportModule { }
