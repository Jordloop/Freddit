import { Component, OnInit } from '@angular/core';
import { Topic } from './topic.model';
import { Router } from '@angular/router';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopicService]
})
export class AppComponent implements OnInit {
  title = 'Freddit!';
  topics: Topic[];
  topicClicked: boolean = false;

  constructor(private router: Router, private topicService: TopicService){}

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }
  goToDetailPage(clickedTopic: Topic) {
    // this.topicClicked = true;
    this.router.navigate(['topics', clickedTopic.id]);
  };
}
