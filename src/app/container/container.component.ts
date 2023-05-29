import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { HobbyTableComponent } from '../hobby-table/hobby-table.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(HobbyTableComponent)
  hobbyTable: HobbyTableComponent = new
    HobbyTableComponent;

  isShown: boolean = true;

  ngAfterContentInit(): void {
    this.hobbyTable.hobbyList[4] = 'Cycling';
  }

  toggle(): void {
    this.isShown = !this.isShown
    console.log(`Toggle in HobbyTableComponent. isShown = ${this.isShown}`);
  }
}
