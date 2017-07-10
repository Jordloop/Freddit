import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Topic } from '../topic.model';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {

  topicId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.topicId = parseInt(urlParameters['id']);
    });
  }

}
