import { Component, OnInit } from '@angular/core';
import { BoodbankapiService } from '../boodbankapi.service';
import { BloodRequest } from '../blood-request';

@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.css']
})
export class ManageRequestComponent implements OnInit {
  reqList: BloodRequest[];
  searchGroup = '';
  btnText = 'add';
  editPos: number;
  constructor(private service: BoodbankapiService) { }
  request: BloodRequest = {
    id: 0,
    reqGroup: '',
    reqDate: new Date(),
    reqHospital: 'INR'
  }
  ngOnInit() {
    this.service.getAllRequests().subscribe(
      resp => {
        this.reqList = resp;
        console.log('temp' + this.reqList);
      }
    );
  }

  submit(val) {
    if (this.btnText === 'add') {
      this.service.addRequest(this.request).subscribe(response => {
        this.reqList.push(response);
      })
    }
    else {
      this.service.updateRequest(this.request).subscribe(response => {
        this.reqList[this.editPos] = response;
      })
    }


  }

  remove(req: BloodRequest) {
    const idxPos = this.reqList.indexOf(req);
    this.service.removeRequest(req).subscribe(response => {
      this.reqList.splice(idxPos, 1);
    })

  }

  update(req: BloodRequest) {
    this.editPos = this.reqList.indexOf(req);
    this.btnText = 'UPDATE';
    this.request = req;


  }

}
