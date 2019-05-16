import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NyxthemeRoutingModule } from './nyxtheme-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
// TODO : register all components

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    NyxthemeRoutingModule
  ]
})
export class NyxthemeModule { }
