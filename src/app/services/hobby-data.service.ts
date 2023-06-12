import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface hobby {
  name: string;
  example: string;
  duration: number;
  skillLevel: number;
  isIndoor: boolean;
}

export interface listItem {
  readonly uid: number;
  hobbyItem: hobby;
}

@Injectable({
  providedIn: 'root'
})
export class HobbyDataService {
  private hobbyList: listItem[];
  private selectedUid: number;

  constructor() {
    this.hobbyList = [
      { uid: 0, hobbyItem: { name: 'Video Games', example: 'AOE4', duration: 23.5, skillLevel: 4, isIndoor: true } },
      { uid: 1, hobbyItem: { name: 'Animate', example: 'Fate Stay Night', duration: 26.2, skillLevel: 2, isIndoor: true } },
      { uid: 2, hobbyItem: { name: 'Ping Pong', example: 'Ping Pong', duration: 22.4, skillLevel: 2, isIndoor: false } },
      { uid: 3, hobbyItem: { name: 'Sci-Fi Novel', example: 'The Three-Body Problem', duration: 16.0, skillLevel: 2, isIndoor: true } },
      { uid: 0, hobbyItem: { name: 'Listening to Music', example: 'Never Gonna Give You Up', duration: 13.3, skillLevel: 2, isIndoor: true } }
    ];

    this.selectedUid = -1;
  }

  private getNextId(): number {
    const idx = this.hobbyList.map((i: listItem) => i.uid);
    return Math.max(...idx) + 1;
  }

  // private filterList(): hobby[] {
  //   return this.hobbyList.map((i: listItem) => i.hobbyItem);
  // }

  getData(): Observable<listItem[]> {
    return of(this.hobbyList);
  }

  addData(addHobbyItem: hobby): Observable<listItem[]> {
    const newListItem: listItem = { uid: this.getNextId(), hobbyItem: addHobbyItem };
    this.hobbyList.push(newListItem);
    return of(this.hobbyList);
  }

  updateData(updateListItem: listItem): Observable<any> {
    const idx = this.hobbyList.findIndex((i: listItem) => i.uid === updateListItem.uid);
    if (-1 !== idx) {
      this.hobbyList[idx] = updateListItem;
      return of(this.hobbyList[idx]);
    }
    return of(null);
  }

  getSelectedUid(): Observable<any> {
    const idx = this.hobbyList.findIndex((i: listItem) => i.uid === this.selectedUid);
    if (-1 !== idx) {
      return of(this.selectedUid);
    }
    return of(null);
  }

  updateSelectedUid(uid: number): Observable<any> {
    const idx = this.hobbyList.findIndex((i: listItem) => i.uid === uid);
    if (-1 !== idx) {
      this.selectedUid = uid;
      console.log(this.selectedUid);
      return of(this.selectedUid);
    }
    return of(null);
  }
}