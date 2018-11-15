import { Component, OnInit } from '@angular/core';
import { BoodbankapiService } from '../boodbankapi.service';
import { BloodDonar } from '../BloodDonar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-donar',
  templateUrl: './show-donar.component.html',
  styleUrls: ['./show-donar.component.css']
})
export class ShowDonarComponent implements OnInit {
  donarList: BloodDonar[];
  details: any;

  constructor(private service: BoodbankapiService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe(param => {
      const donarId = param['id'];
      if (donarId != undefined) {
        this.service.findDonorHistory(donarId).subscribe(resp => {
          this.details = resp;

        });
      }
    });
    this.service.findAllDonors().subscribe(data => this.donarList = data,
      err => console.log("error"),
      () => {
        console.log(this.donarList);
        console.log('completed');
      }
    );
  }

}
