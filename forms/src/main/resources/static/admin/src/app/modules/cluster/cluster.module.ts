import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterTreeComponent } from 'app/components/cluster-tree/cluster-tree.component';
import { ClusterDetailComponent } from 'app/components/cluster-detail/cluster-detail.component';
import { ClusterIdSettingComponent } from 'app/components/cluster-id-setting/cluster-id-setting.component';
import { ClusterButtonsComponent } from 'app/components/cluster-buttons/cluster-buttons.component';

@NgModule({
  declarations: [
	ClusterTreeComponent,
	ClusterDetailComponent,
	ClusterIdSettingComponent,
	ClusterButtonsComponent
	],
  imports: [
    CommonModule
  ]
})
export class ClusterModule { }
