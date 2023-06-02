import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, ViewChild } from '@angular/core';
import { TestChildContentComponent } from '../test-child-content/test-child-content.component';
import { IfStmt } from '@angular/compiler';
import { TestChildComponent } from '../test-child/test-child.component';

@Component({
  selector: 'app-test-parent-content',
  templateUrl: './test-parent-content.component.html',
  styleUrls: ['./test-parent-content.component.css']
})
export class TestParentContentComponent implements AfterContentChecked, AfterContentInit, AfterViewInit {
  @ContentChild(TestChildContentComponent) childContentChild!: TestChildContentComponent;
  @ViewChild(TestChildComponent) childViewChild!: TestChildContentComponent;
  
  msg: string = new Date().toString();

  ngAfterViewInit() {
    console.log(`AfterViewInit ${this.childViewChild}`);
  }

  ngAfterContentInit() {
    console.log(`AfterContentInit ${this.childContentChild}`);
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.childContentChild) {
      if (this.msg === this.childContentChild.msg) {
        this.logIt('AfterContentChecked (no change)');
      } 
      else {
        this.msg = this.childContentChild.msg;
        this.logIt('AfterContentChecked');
      }
    }
  }

  changeMsg(): void {
    this.childContentChild.msg = new Date().toString();
    //console.log(new Date().toString());
  }

  logIt(msg: string): void {
    console.log(`${this.constructor.name}: ${msg}`);
  }
}
