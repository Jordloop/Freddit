import { Component } from '@angular/core';
import { Topic } from './topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Freddit!';

  masterTopicList: Topic[] = [
    new Topic('Kittens', 'Kittens are pretty good.', 'https://i.ytimg.com/vi/w6DW4i-mfbA/hqdefault.jpg', 'kitten', 'ILuvKittens2000', 1),
    new Topic('Puppers', 'Puppies are pretty good.', 'http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-3.jpg', 'puppy', 'ILuvPuppies2000', 2)
  ];

  addTopic(newTopicFromChild) {
    this.masterTopicList.push(newTopicFromChild);
  }
}
