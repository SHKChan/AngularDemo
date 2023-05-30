import { Component, OnDestroy } from '@angular/core';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnDestroy {
  hobbyList!: string[];

  constructor(private hobbyService: MyHobbyServiceService) {
    this.hobbyList = this.hobbyService.getHobbyList();
  }

  ngOnDestroy(): void {
    console.log('MyProfileComponent destroyed.');
  }
}
