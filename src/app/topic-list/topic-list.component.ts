import { Component, OnInit } from '@angular/core';
import { Topic } from './../topic.model';
import { Router } from '@angular/router';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
  providers: [TopicService]
})
export class TopicListComponent implements OnInit {

  topics: Topic[];

  constructor(private router: Router, private topicService: TopicService){}

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }

  goToDetailPage(clickedTopic: Topic) {
    this.router.navigate(['topics', clickedTopic.id]);
  };

}
