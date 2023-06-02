import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  isShown : boolean = true;

  constructor() {
  }

  showOrHide() : void {
    this.isShown = !this.isShown
  }
}
