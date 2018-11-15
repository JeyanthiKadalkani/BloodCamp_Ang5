import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-hospital',
  templateUrl: './show-hospital.component.html',
  styleUrls: ['./show-hospital.component.css']
})
export class ShowHospitalComponent implements OnInit {
  @Input() location: string;
  @Output() hospitalList: EventEmitter<string[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  sendHospitalList() {
    if (this.location == 'chennai') {
      this.hospitalList.emit(['appollo', 'Lakshmi', 'Malar']);
    } else {
      this.hospitalList.emit(['GH', 'WHO', 'ThangaRaj']);
    }

  }

}
