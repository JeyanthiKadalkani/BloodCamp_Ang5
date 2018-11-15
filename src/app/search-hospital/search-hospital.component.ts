import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css']
})
export class SearchHospitalComponent implements OnInit {

  list: any;
  city = 'chennai';
  constructor() { }

  ngOnInit() {
  }

  onChangeHospital(val) {
    console.log(val);
    this.list = val;
  }



}
