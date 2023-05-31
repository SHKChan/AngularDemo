import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { hobby } from 'services/hobby';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-hobby-table',
  templateUrl: './hobby-table.component.html',
  styleUrls: ['./hobby-table.component.css']
})
export class HobbyTableComponent {
  hobbyList!: hobby[];
  name: string = '';
  example: string = '';
  duration: string = '';
  skillLevel: string = '';
  isIndoor: string = '';
  private MyHobbyServiceService!: MyHobbyServiceService;

  @Output() selectedIndexEmitter = new EventEmitter<number>();

  constructor(private hobbyService: MyHobbyServiceService) {
    this.MyHobbyServiceService = hobbyService;
    this.hobbyList = this.MyHobbyServiceService.getHobbyList();
  }

  printHobbyListInService(): void {
    console.log(`Hobby list inside service: ${this.MyHobbyServiceService.getHobbyList()}`);
  }

  selectedHobby(index: number): void {
    this.MyHobbyServiceService.selectedIndex = index;
    this.selectedIndexEmitter.emit(index);
  }
}
