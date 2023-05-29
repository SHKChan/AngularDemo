import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('MyProfileComponent destroyed.');
  }
}
