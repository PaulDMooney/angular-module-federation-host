import { Component, OnInit, Optional } from '@angular/core';
import { AppInfoService } from '../app-info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-fancy-thing',
  templateUrl: './fancy-thing.component.html',
  styleUrls: ['./fancy-thing.component.css']
})
export class FancyThingComponent implements OnInit {

  appInfo?: string

  constructor(@Optional() private appInfoService: AppInfoService, httpClient: HttpClient) { }

  ngOnInit(): void {
    this.appInfo = this.appInfoService?.info;
  }

}
