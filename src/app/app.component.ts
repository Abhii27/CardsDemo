import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy Mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'biking11',
      content: 'I did some biking today'
    },
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },{
      title: 'Snowy Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy Mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'biking11',
      content: 'I did some biking today'
    }
    
  ];
}
