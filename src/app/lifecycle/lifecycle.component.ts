import { Component, OnInit, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, AfterViewInit {
  info = '';
  constructor() {
    alert('Parent Constructor');
  }

  ngOnInit() {
    alert('Parent OnInit');
  }
  ngOnChanges(change: SimpleChanges) {
    alert('Parent onchnage');
  }

  ngAfterViewInit() {
    alert("after view init");
  }


}
