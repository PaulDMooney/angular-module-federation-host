import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'testremote1', loadChildren: () =>
    loadRemoteModule({
      type: 'manifest',
      remoteName: 'remote1', // Key in mf.manifest.json
      exposedModule: './RemoteStuffModule' // key in remote project's webpack.config.js `exposes` object
    }).then(m => m.RemotestuffModule) // Same module name as in remote1 project
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
