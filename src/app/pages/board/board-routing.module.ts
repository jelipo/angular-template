import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from './board.component';

const routes: Routes = [
  {
    path: '', component: BoardComponent,
    children: [
      {path: '', redirectTo: 'welcome'},
      {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
        data: {breadcrumb: '欢迎'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {
}
