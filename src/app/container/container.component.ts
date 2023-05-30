import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { HobbyTableComponent } from '../hobby-table/hobby-table.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(HobbyTableComponent) hobbyComponent!: HobbyTableComponent;
  isShown: boolean = true;

  ngAfterContentInit(): void {
    if (this.hobbyComponent) {
      this.hobbyComponent.hobbyList[0] = 'Video Game: Age of Empire';
      this.hobbyComponent.printHobbyListInService();
    }
  }

  toggle(): void {
    this.isShown = !this.isShown
    console.log(`Toggle in HobbyTableComponent. isShown = ${this.isShown}`);
  }
}
