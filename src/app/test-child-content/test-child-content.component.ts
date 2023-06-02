import { Component } from '@angular/core';

@Component({
  selector: 'app-test-child-content',
  templateUrl: './test-child-content.component.html',
  styleUrls: ['./test-child-content.component.css']
})
export class TestChildContentComponent {
  msg : string = new Date().toString();
}
