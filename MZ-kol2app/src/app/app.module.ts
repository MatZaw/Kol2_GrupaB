import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MZDataService} from "./services/mz-data.service";
import { MZForumComponent } from './components/mz-forum/mz-forum.component';
import { MZForumItemComponent } from './components/mz-forum-item/mz-forum-item.component';
import { MZForumDetailsComponent } from './components/mz-forum-details/mz-forum-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MZForumComponent,
    MZForumItemComponent,
    MZForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MZDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
