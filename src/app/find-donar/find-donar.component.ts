import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { LocationListComponent } from '../location-list/location-list.component';

@Component({
  selector: 'app-find-donar',
  templateUrl: './find-donar.component.html',
  styleUrls: ['./find-donar.component.css']
})
export class FindDonarComponent implements OnInit {
  isDisabled = true;
  bloodGroup = 'bpos';
  donarDetails;
  city = '';
  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

  change() {
    this.isDisabled = false;
  }

  @ViewChild('locRef', { read: ViewContainerRef }) viewRef: ViewContainerRef;

  search(event) {
    console.log(event);
    this.donarDetails = 'Jeyanthi';
    if (this.bloodGroup == 'bpos') {
      this.donarDetails = 'Malar';
    }
  }

  remove() {
    this.service.removeComponent();
  }

  showLocation() {
    this.service.setViewRef(this.viewRef);
    const compRef = this.service.addComponent(LocationListComponent);

    const com = (<LocationListComponent>compRef);

    com.selected.subscribe(value => {
      this.city = value;
      if (this.city.length > 0) {
        this.service.removeComponent();
      }
    });
  }

}
