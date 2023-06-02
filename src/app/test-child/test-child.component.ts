import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import '../test-parent/interface author';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnChanges {
  oldDate: string = '';
  changeDetected: boolean = false;
  noChangeCount: number = 0;

  @Input() message: string = '';
  @Input() sender!: author; // pass by reference, would not trigger ngOnChange()

  // call each time input propertity change
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);

      this.logIt(this.message);
    }
  }

  // catch changes that are not trigger ngOnChanges(like 'sender')
  ngDoCheck() {
    if (this.sender) {
      if (this.sender.date !== this.oldDate) {
        this.changeDetected = true;
        this.logIt(`DoCheck: sender date changed to ${this.sender.date}`);
        this.oldDate = this.sender.date;
      }

      if (this.changeDetected) {
        this.noChangeCount = 0;
      }
      else {
        // log that hook was called when there was no relevant change.
        const count = this.noChangeCount += 1;
        const noChangeMsg = `DoCheck called ${count}x when no change to sender`;
        if (count === 1) {
          // add new "no change" message
          this.logIt(noChangeMsg);
        }
      }
    }

    this.changeDetected = false;
  }

  logIt(msg: string): void {
    console.log(`${this.constructor.name}: ${msg}`);
  }
}
