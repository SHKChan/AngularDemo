import { Component, OnInit } from '@angular/core';
import { hobby } from 'services/hobby';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-hobby-table',
  templateUrl: './hobby-table.component.html',
  styleUrls: ['./hobby-table.component.css']
})
export class HobbyTableComponent implements OnInit {
  //@Output() selectedIndexEmitter = new EventEmitter<number>();

  name: string = '';
  example: string = '';
  duration: string = '';
  skillLevel: string = '';
  isIndoor: string = '';

  selectedIndex: number = 0;
  hobbyList: hobby[] = [];

  constructor(private myHobbyService: MyHobbyServiceService) {
  }

  // creeate setter and getter for selectedIndex
  getIndex(): number {
    return this.selectedIndex;
  }
  setIndex(index: number): void {
    this.selectedIndex = index;
    this.myHobbyService.updateHobbyData(this.hobbyList, index);
  }

  getItem(index: number): hobby {
    if (index < this.hobbyList.length) {
      return this.hobbyList[index];
    }
    return this.hobbyList[0];
  }
  setItem(item: hobby, index: number): void {

    if (index < this.hobbyList.length) {
      this.hobbyList[index] = item;
    }
    else{
      this.hobbyList.push(item);
    }
    this.myHobbyService.updateHobbyData(this.hobbyList, this.selectedIndex);
  }


  ngOnInit(): void {
    this.myHobbyService.getHobbyData().subscribe(([list, index]) => {
      // Use the list and index values in your component
      this.hobbyList = list;
      this.selectedIndex = index;
    });
  }

  printHobbyListInService(): void {
    // Use the list and index values in your component
    console.log(`Hobby List inside Service: ${this.hobbyList}, and the Selected Index: ${this.selectedIndex}`);
  }
}
