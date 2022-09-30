import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppInfoComponent } from './app-info/app-info.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AppInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AppInfoComponent
  ]
})
export class MainModule { }
