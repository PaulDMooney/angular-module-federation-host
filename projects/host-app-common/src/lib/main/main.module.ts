import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FancyThingComponent } from './fancy-thing/fancy-thing.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FancyThingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FancyThingComponent
  ]
})
export class MainModule { }
