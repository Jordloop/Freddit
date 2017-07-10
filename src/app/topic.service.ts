import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { TOPICS } from './mock-topics';

@Injectable()
export class TopicService {

  constructor() { }

  getTopics() {
    return TOPICS;
  }

}
