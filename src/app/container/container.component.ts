import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
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
    if (this.hobbyComponent.hobbyList.length > 0) {
      this.hobbyComponent.setItem({name: 'Video Games', example: 'War3', duration: 23, skillLevel: 4, isIndoor: true}, 0);
      this.hobbyComponent.printHobbyListInService();
    }
  }

  hideOrShowProfile(): void {
    this.isShown = !this.isShown
    console.log(`Toggle in HobbyTableComponent. isShown = ${this.isShown}`);
  }

  adddHobby(): void {
    this.hobbyComponent.setItem({name: this.hobbyComponent.name, example: this.hobbyComponent.example, duration: parseFloat(this.hobbyComponent.duration), skillLevel: parseInt(this.hobbyComponent.skillLevel), isIndoor: Boolean(this.hobbyComponent.isIndoor)}, this.hobbyComponent.hobbyList.length);
  }
}
