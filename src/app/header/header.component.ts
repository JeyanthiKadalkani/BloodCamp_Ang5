import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  majHeading: string;

  pageLinks: Link[] = [
    { linkRef: 'home', linkText: 'Home', style: 'fa fa-2x fa-twitter' },
    { linkRef: 'request', linkText: 'Request Blood', style: 'fa fa-2x fa-twitter' },
    { linkRef: 'findDonar', linkText: 'Search Donars', style: 'fa fa-2x fa-twitter' },
    { linkRef: 'showDonar', linkText: 'Show Donar', style: 'fa fa-2x fa-twitter' },
    { linkRef: 'showHospital', linkText: 'Show Hospital', style: 'fa fa-2x fa-twitter' },

    { linkRef: 'camps', linkText: 'View Camps', style: 'fa fa-2x fa-twitter' }
  ]
  constructor() {
    this.logo = "assets/Images/b1.jpg";
    this.majHeading = "Donate your blood!!!!";
  }

  ngOnInit() {

  }

}
