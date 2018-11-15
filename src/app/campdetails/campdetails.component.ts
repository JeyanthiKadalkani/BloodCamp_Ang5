import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PastCampComponent } from '../past-camp/past-camp.component';
import { FutureCampsComponent } from '../future-camps/future-camps.component';

@Component({
  selector: 'app-campdetails',
  templateUrl: './campdetails.component.html',
  styleUrls: ['./campdetails.component.css']
})
export class CampdetailsComponent implements OnInit, AfterViewInit {
  @ViewChild(PastCampComponent) past: PastCampComponent;
  @ViewChild(FutureCampsComponent) future: FutureCampsComponent;
  pastCamps: string[];
  futCamps: string[];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.pastCamps = this.past.getDetails('jul', 2018);
    this.futCamps = this.future.getDetails('dec', 2018);
    this.changeDetector.detectChanges();
  }

}
