import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { hobby } from 'services/hobby';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {
  hobbyList: hobby[] = [];
  selectedIndex: number = 0;
  private hobbyDataSubscription!: Subscription;

  constructor(private myHobbyService: MyHobbyServiceService) {
  }
  ngOnInit(): void {
    this.hobbyDataSubscription = this.myHobbyService.hobbyDataObservable$.subscribe(([list, index]) => {
      this.hobbyList = list;
      this.selectedIndex = index;
    })
  }

  ngOnDestroy(): void {
    this.hobbyDataSubscription.unsubscribe();
  }
}
