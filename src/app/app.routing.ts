import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'newTopic',
    component: NewTopicComponent
  },
  {
    path: 'topics/:id',
    component: TopicDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
