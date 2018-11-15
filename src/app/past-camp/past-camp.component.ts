import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-camp',
  templateUrl: './past-camp.component.html',
  styleUrls: ['./past-camp.component.css']
})
export class PastCampComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDetails(month: string, year: number): string[] {
    return ['Mepco', 'GCT', 'CIT', 'SRM', 'PSG'];
  }

}
