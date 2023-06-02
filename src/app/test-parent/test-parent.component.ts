import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import './interface author';
import { TestChildComponent } from '../test-child/test-child.component';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
  inputMessage: string = 'This message is input from test-parent component';
  count: number = 0;
  sender: author = {
    name: this.constructor.name,
    date: new Date().toDateString()
  }

  @ViewChild(TestChildComponent) viewChild!: TestChildComponent;

  inputMsg(): void {
    this.count++;
    this.sender.date = new Date().toString();
    this.inputMessage = `This message is input from ${this.sender.name} ${this.count} times`;
  }

  // call once after component initialized
  ngOnInit(): void {
    this.sender.date = new Date().toString();
    this.logIt('ngOnInit');
  }

  // call after view(both itself and child view ) has been initialized
  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    //this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.sender === this.viewChild.sender) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.sender = this.viewChild.sender;
      this.logIt('AfterViewChecked');
      //this.doSomething();
    }
  }
  
  // ngOnchange in child component would not call ngOnChanges() on its parents
  // instead it will call ngAfterViewCheck()
  ngOnChanges(changes: SimpleChanges): void {
    this.logIt('ngOnChanges');
  }

  logIt(msg: string): void {
    console.log(`${this.constructor.name}: ${msg}`);
  }
}
