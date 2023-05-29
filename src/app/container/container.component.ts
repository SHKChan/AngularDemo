import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(MyProfileComponent)
  myProfile: MyProfileComponent = new MyProfileComponent;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.myProfile);
  }
}
