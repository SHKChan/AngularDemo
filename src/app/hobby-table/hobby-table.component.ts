import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HobbyDataService, listItem } from 'src/app/services/hobby-data.service';

@Component({
  selector: 'app-hobby-table',
  templateUrl: './hobby-table.component.html',
  styleUrls: ['./hobby-table.component.css']
})
export class HobbyTableComponent implements OnInit {
  name: string = '';
  example: string = '';
  duration: string = '';
  skillLevel: string = '';
  isIndoor: string = '';

  dataPipe$!: Observable<listItem[]>;

  @Output() isShownEvent = new EventEmitter<boolean>();

  constructor(private hobbyDataService: HobbyDataService) {
  }

  ngOnInit(): void {
    this.dataPipe$ = this.hobbyDataService.getData();
  }

  setSelected(index: number): void {
    this.dataPipe$.subscribe(data => {
      this.hobbyDataService.updateSelectedUid(data[index].uid);
    });
  }
}
