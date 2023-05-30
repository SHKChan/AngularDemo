import { Component } from '@angular/core';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-hobby-table',
  templateUrl: './hobby-table.component.html',
  styleUrls: ['./hobby-table.component.css']
})
export class HobbyTableComponent {
  hobbyList!: string[];
  private MyHobbyServiceService!: MyHobbyServiceService;

  constructor(private hobbyService: MyHobbyServiceService) {
    this.MyHobbyServiceService = hobbyService;
    this.hobbyList = this.MyHobbyServiceService.getHobbyList();
  }

  printHobbyListInService(): void {
    console.log(`Hobby list inside service: ${this.MyHobbyServiceService.getHobbyList()}`);
  }
}
