import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() msg = '';

  constructor() {
    alert('child construcor');
  }

  ngOnInit() {
    alert('child Init');
  }

  ngOnChanges(change: SimpleChanges) {
    alert("Child on changes");

  }

}
