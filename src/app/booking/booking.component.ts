import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  id: number = 0;

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    }
    )
  }

}
