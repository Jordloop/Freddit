import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { TOPICS } from './mock-topics';

@Injectable()
export class TopicService {

  constructor() { }

  getTopics() {
    return TOPICS;
  }

  getTopicById(topicId: number) {
    for (var i = 0; i <= TOPICS.length - 1; i++) {
      if (TOPICS[i].id === topicId) {
        return TOPICS[i];
      }
    }
  }

  addTopic(topicToAdd: Topic) {
    TOPICS.push(topicToAdd);
  }
}
