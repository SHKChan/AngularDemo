import { Injectable } from '@angular/core';
import { hobby } from './hobby';

@Injectable({
  providedIn: 'root'
})
export class MyHobbyServiceService {
  hobbyList: hobby[] = [];
  selectedIndex: number = 0;
  
  constructor() {
    this.hobbyList = [
      {name: 'Video Games', example: 'AOE4', duration: 23.5, skillLevel: 4, isIndoor: true},
      {name: 'Animate', example: 'Fate Stay Night', duration: 26.2, skillLevel: 2, isIndoor: true},
      {name:'Ping Pong', example: 'Ping Pong', duration: 22.4, skillLevel: 2, isIndoor: false},
      {name:'Sci-Fi Novel', example: 'The Three-Body Problem', duration: 16.0, skillLevel: 2, isIndoor: true},
      {name:'Listening to Music', example: 'Never Gonna Give You Up', duration: 13.3, skillLevel: 2, isIndoor: true},
    ];
    // only one instance for global service
    console.log('Hello MyHobbyServiceService Provider');
  }

  getHobbyList(): hobby[] {
    return this.hobbyList;
  }
}
