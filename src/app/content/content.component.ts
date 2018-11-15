import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentList: Content[];
  count: Observable<number>;
  range: number;
  constructor() {

    this.contentList = [
      { image: 'assets/Images/b2.jpg', description: 'Blood Donars', count: 4500 },
      { image: 'assets/Images/b3.jpg', description: 'Requests', count: 2500 },
      { image: 'assets/Images/b4.jpg', description: 'Active  Donars', count: 1500 }

    ];
  }

  ngOnInit() {

    this.count = Observable.create((observer) => {


      var i = 100;
      const timer = setInterval(() => {
        observer.next(i);
        i = i + 100;

        if (i > 2000) {
          clearInterval(timer);
        }
      }, 100);


    });


    const subscribe = this.count.subscribe(val => this.range = val);

  }

  createRange(number) {
    var items: number[] = [];
    for (let i = 1; i <= number; i += 100) {
      items.push(i);
    }
    return items;
  }

}