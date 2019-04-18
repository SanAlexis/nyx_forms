import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import { CommonModule } from '@angular/common';

import { ClusterTreeComponent } from 'app/components/cluster-tree/cluster-tree.component';
import { ClusterDetailComponent } from 'app/components/cluster-detail/cluster-detail.component';
import { ClusterIdSettingComponent } from 'app/components/cluster-id-setting/cluster-id-setting.component';
import { ClusterButtonsComponent } from 'app/components/cluster-buttons/cluster-buttons.component';

const clusterRoutes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];


@NgModule({
  imports: [RouterModule.forChild(clusterRoutes)],
  exports: [RouterModule],
})

export class ClusterRoutingModule { }
