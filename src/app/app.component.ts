import { Component } from '@angular/core';
import { Topic } from './topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Freddit!';

  currentTime: object = new Date();

  masterTopicList: Topic[] = [
    new Topic('Kittens', 'Kittens are pretty good.', this.currentTime, 'https://i.ytimg.com/vi/w6DW4i-mfbA/hqdefault.jpg', 'kitten', 'ILuvKittens2000'),
    new Topic('Puppers', 'Puppies are pretty good.', this.currentTime, 'http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-3.jpg', 'puppy', 'ILuvPuppies2000')
  ];
}
