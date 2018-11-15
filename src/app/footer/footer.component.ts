import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkList: Link[];
  constructor() {
    this.linkList = [
      { linkRef: 'http://twitter.com', linkText: 'Twitter', style: 'fa fa-2x fa-twitter' },
      { linkRef: 'http://instagram.com', linkText: 'Instagram', style: 'fa fa-2x fa-instagram' },
      { linkRef: 'http://facebook.com', linkText: 'Facebook', style: 'fa fa-2x fa-facebook' }
    ]
  }

  ngOnInit() {
  }

}
