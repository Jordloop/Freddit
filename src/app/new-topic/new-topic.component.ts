import { Component, Output, EventEmitter } from '@angular/core';
import { Topic } from './../topic.model';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent {
  @Output() newTopicSender = new EventEmitter();

  submitNewTopicForm(title: string, text: string, image: string, tag: string, userName: string, id: number) {
    const newTopicToAdd: Topic = new Topic(title, text, image, tag, userName, id);
    this.newTopicSender.emit(newTopicToAdd);
  }
}
