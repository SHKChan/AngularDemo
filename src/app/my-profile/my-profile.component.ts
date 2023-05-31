import { Component, OnDestroy } from '@angular/core';
import { hobby } from 'services/hobby';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnDestroy {
  hobbyList!: hobby[];

  constructor(private hobbyService: MyHobbyServiceService) {
    this.hobbyList = this.hobbyService.getHobbyList();
  }

  ngOnDestroy(): void {
    console.log(this.hobbyList.length);
    console.log('MyProfileComponent destroyed.');
  }
}
