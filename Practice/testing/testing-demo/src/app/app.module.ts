import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { VoteComponent } from './vote/vote.component';
import { UserComponentComponent } from './user/user-component/user-component.component';
import {UserService} from './service/user.service';
import { SummaryPipe } from './summary.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    VoteComponent,
    UserComponentComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
