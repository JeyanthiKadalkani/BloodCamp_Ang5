import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-camps',
  templateUrl: './future-camps.component.html',
  styleUrls: ['./future-camps.component.css']
})
export class FutureCampsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDetails(month: string, year: number): string[] {
    return ['Verizon', 'Zoho', 'bookings.com', 'Nokia', 'RN'];
  }

}
