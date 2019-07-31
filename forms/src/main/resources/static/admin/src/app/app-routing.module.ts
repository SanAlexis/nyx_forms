import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MythemeModule } from './mytheme/mytheme.module';
import { InquiryModule } from './modules/inquiry/inquiry.module';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {
    DashboardComponent,
} from './components/dashboard/dashboard.component';
import {
    InquiryComponent,
} from './components/inquiry/inquiry.component';

const routes: Routes = [
  
  { path: 'home',
    component: DashboardComponent,
    children: [{
        path: 'inquiry', 
        component : InquiryComponent,
        },
    { path: 'licence', 
        component : InquiryComponent,},
    ],
    },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
