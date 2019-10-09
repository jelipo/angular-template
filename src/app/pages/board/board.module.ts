import {NgModule} from '@angular/core';
import {BoardRoutingModule} from './board-routing.module';
import {TopbarComponent} from './topbar/topbar.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BoardComponent} from './board.component';


@NgModule({
  imports: [
    BoardRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [
    BoardComponent,
    TopbarComponent
  ],
  exports: [BoardComponent]
})

export class BoardModule {
}
