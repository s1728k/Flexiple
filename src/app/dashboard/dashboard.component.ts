import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppStore } from '../app.store'
import { Company } from '../login/comp-signup/company.model';
import { Dev } from '../login/dev-signup/dev.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	freelancers: Dev[];
	companies: Company[];

  constructor(private appStore: AppStore, private router: Router,) { }

  ngOnInit() {
  	this.freelancers = this.appStore.freelancers;
  	this.companies = this.appStore.companies;
  }

  logoutFreelancer(item){
  	this.freelancers.splice(this.freelancers.indexOf(item),1);
  	this.appStore.freelancers = this.freelancers;
  }

	logoutCompany(item){
		this.companies.splice(this.companies.indexOf(item),1);
		this.appStore.companies = this.companies;
	}

}
