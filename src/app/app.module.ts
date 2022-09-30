import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule, AppInfoService, appInfoFactory } from 'host-app-common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MainModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AppInfoService,
      useFactory: () => appInfoFactory('Host app')
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
