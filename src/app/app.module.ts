import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, PathLocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzIconModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
