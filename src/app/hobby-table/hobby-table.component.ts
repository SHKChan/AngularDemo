import { Component } from '@angular/core';

@Component({
  selector: 'app-hobby-table',
  templateUrl: './hobby-table.component.html',
  styleUrls: ['./hobby-table.component.css']
})
export class HobbyTableComponent {
  hobbyList : string[] = ['Video Game', 'Table Tennis', 'Animate', 'Sci-Fi', 'Listening Music'];
}
