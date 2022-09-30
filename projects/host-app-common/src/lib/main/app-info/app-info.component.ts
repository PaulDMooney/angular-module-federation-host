import { Component, OnInit, Optional } from '@angular/core';
import { AppInfoService } from '../app-info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  appInfo?: string

  constructor(@Optional() private appInfoService: AppInfoService, httpClient: HttpClient) { }

  ngOnInit(): void {
    this.appInfo = this.appInfoService?.info;
  }

}
