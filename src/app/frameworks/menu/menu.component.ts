import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: any[];

  constructor(private router: Router) {
    this.menu = [
      { isHover: false, item: 'Profile', path: '/profile' },
      { isHover: false, item: 'Hobby', path: '/hobby' },
    ];
  }

  onMouseHover(item: any) {
    item.isHover = true;
  }

  onMouseOut(item:any){
    item.isHover = false;
  }

  onClick(url: string) {
    this.router.navigateByUrl(url);
    console.log(url);
  }
}
