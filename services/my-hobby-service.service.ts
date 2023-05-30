import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyHobbyServiceService {
  hobbyList: string[] = [];
  
  constructor() {
    this.hobbyList = ['Video Game', 'Table Tennis', 'Animate', 'Sci-Fi', 'Listening Music'];
    // only one instance for global service
    console.log('Hello MyHobbyServiceService Provider');
  }

  getHobbyList(): string[] {
    return this.hobbyList;
  }
}
