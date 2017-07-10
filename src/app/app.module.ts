import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewTopicComponent,
    TopicDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
