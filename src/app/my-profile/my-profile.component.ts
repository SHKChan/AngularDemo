import { Component, OnDestroy, OnInit } from '@angular/core';
import { hobby } from 'services/hobby';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  hobbyList: hobby[] = [];
  selectedIndex: number = 0;

  constructor(private myHobbyService: MyHobbyServiceService) {
  }
  ngOnInit(): void {
    this.myHobbyService.getHobbyData().subscribe(([list, index]) => {
      // Use the list and index values in your component
      this.hobbyList = list;
      this.selectedIndex = index;
    });

    console.log(`Hobby List inside My-Profile Component: ${this.hobbyList}, and the Selected Index: ${this.selectedIndex}`);
  }
}
