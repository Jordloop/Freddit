import { Component, Input } from '@angular/core';
import { Topic } from './../topic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent {

  @Input() childTopicList: Topic[];

  constructor(private router: Router){}

  goToDetailPage(clickedTopic: Topic) {
    this.router.navigate(['topics', clickedTopic.id]);
  };

}
