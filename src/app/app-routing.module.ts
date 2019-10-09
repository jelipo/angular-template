import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'board'},
  {
    path: 'board',
    loadChildren: () => import('./pages/board/board.module').then(m => m.BoardModule),
    data: {breadcrumb: '首页'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
