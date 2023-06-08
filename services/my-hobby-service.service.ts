import { Injectable } from '@angular/core';
import { hobby } from './hobby';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHobbyServiceService {
  private hobbyList: hobby[] = [];
  private selectedIndex: number = 0;
  private hobbyDataSubject: BehaviorSubject<[hobby[], number]> = new BehaviorSubject<[hobby[], number]>([this.hobbyList, this.selectedIndex]);
  
  hobbyDataObservable$: Observable<[hobby[], number]> = this.hobbyDataSubject.asObservable();

  constructor() {
    this.hobbyList = [
      { name: 'Video Games', example: 'AOE4', duration: 23.5, skillLevel: 4, isIndoor: true },
      { name: 'Animate', example: 'Fate Stay Night', duration: 26.2, skillLevel: 2, isIndoor: true },
      { name: 'Ping Pong', example: 'Ping Pong', duration: 22.4, skillLevel: 2, isIndoor: false },
      { name: 'Sci-Fi Novel', example: 'The Three-Body Problem', duration: 16.0, skillLevel: 2, isIndoor: true },
      { name: 'Listening to Music', example: 'Never Gonna Give You Up', duration: 13.3, skillLevel: 2, isIndoor: true }
    ];
    // only one instance for global service
    console.log('Hello MyHobbyServiceService Provider');
  }

  getHobbyData(): Observable<[hobby[], number]> {
    return of([this.hobbyList, this.selectedIndex]);
  }

  updateHobbyData(list: hobby[], index: number): void {
    // update data
    this.hobbyList = list;
    this.selectedIndex = index;
    this.hobbyDataSubject.next([this.hobbyList, this.selectedIndex]);
  }

  addHobby(hobby: hobby): void {
    this.hobbyList.push(hobby);
    this.hobbyDataSubject.next([this.hobbyList, this.selectedIndex]);
  }
}
