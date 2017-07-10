import { Component, Input } from '@angular/core';
import { Topic } from './../topic.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent {

  @Input() childTopicList: Topic[];

}
