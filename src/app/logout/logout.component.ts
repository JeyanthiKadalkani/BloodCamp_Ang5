import { Component, OnInit } from '@angular/core';
import { ComponentInteractionService } from '../component-interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: ComponentInteractionService, private route: Router) { }

  ngOnInit() {
  }
  signOut() {
    this.service.changeUserStatus('logout');
    sessionStorage.removeItem('logged');
    this.route.navigate(['login']);
  }

}
