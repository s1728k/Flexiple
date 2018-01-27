import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppStore } from '../../app.store'
import { Dev } from './dev.model'

@Component({
  selector: 'app-dev-signup',
  templateUrl: './dev-signup.component.html',
  styleUrls: ['./dev-signup.component.scss']
})
export class DevSignupComponent implements OnInit {

  dev = new Dev();
  pwShow = false;

  constructor(private appStore: AppStore, private router: Router,) { }

  ngOnInit() {
  }

  onPwopen(){
  	this.pwShow = !this.pwShow;
  }

  saveDev(){
    this.appStore.freelancers.push(this.dev);
    this.dev = new Dev();
    
    alert("Dev Saved");
    this.router.navigate(['/login']);
  }

}
