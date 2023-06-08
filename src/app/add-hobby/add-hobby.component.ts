import { Component } from '@angular/core';
import { hobby } from 'services/hobby';
import { MyHobbyServiceService } from 'services/my-hobby-service.service';

@Component({
  selector: 'app-add-hobby',
  templateUrl: './add-hobby.component.html',
  styleUrls: ['./add-hobby.component.css']
})

// example for template driven form
export class AddHobbyComponent {
  newHobby : hobby ={
    name: '',
    example: '',
    duration: 0,
    skillLevel: 0,
    isIndoor: false
  }

  msg : string = '';

  constructor(private myHobbyService: MyHobbyServiceService) {
    
  }

  addHobby(){
    this.myHobbyService.addHobby(this.newHobby);
    this.msg = 'Hobby Added';
  }
}
