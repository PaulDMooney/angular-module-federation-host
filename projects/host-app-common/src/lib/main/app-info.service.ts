import { Inject, Injectable, Optional } from '@angular/core';

export function appInfoFactory(appInfo:string): AppInfoService {
  const appInfoService = new AppInfoService();
  appInfoService.updateInfo(appInfo);
  return appInfoService;
}

@Injectable()
export class AppInfoService {

  public info?: string

  constructor() {
   }

   updateInfo(updatedInfo: string) {
    this.info = updatedInfo;
   }

}
