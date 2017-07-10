import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Topic } from './../topic.model';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css'],
  providers: [TopicService]
})
export class NewTopicComponent implements OnInit {
  topicToAdd: Topic;

  constructor(private route: ActivatedRoute, private location: Location, private topicService: TopicService) { }

  ngOnInit() {
    
  }








}
