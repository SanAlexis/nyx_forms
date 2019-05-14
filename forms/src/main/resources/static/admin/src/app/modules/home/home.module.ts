import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { MythemeModule } from 'app/mytheme/mytheme.module';

import { DashboardComponent } from 'app/components/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    
    MythemeModule,
  ]
})
export class HomeModule { }
