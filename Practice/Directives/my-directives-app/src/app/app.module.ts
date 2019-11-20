import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HiddenpropertyComponent } from './hiddenproperty/hiddenproperty.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { NgforloopComponent } from './ngforloop/ngforloop.component';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    HiddenpropertyComponent,
    SwitchcaseComponent,
    NgforloopComponent,
    CustomdirectivesComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
