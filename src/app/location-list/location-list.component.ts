import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations = ['Chennai', 'Mumbai', 'Bangalore', 'Pune', 'Kolkata'];
  selected: BehaviorSubject<string> = new BehaviorSubject('');
  
  constructor() { }

  ngOnInit() {
  }
  setValue(location){
    this.selected.next(location);
  }

}
