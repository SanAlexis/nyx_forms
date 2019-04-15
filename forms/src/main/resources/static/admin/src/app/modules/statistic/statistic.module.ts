import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticListComponent } from 'app/components/statistic-list/statistic-list.component';
import { StatisticDetailComponent } from 'app/components/statistic-detail/statistic-detail.component';

@NgModule({
  declarations: [
	StatisticListComponent,
	StatisticDetailComponent
	],
  imports: [
    CommonModule
  ]
})
export class StatisticModule { }
