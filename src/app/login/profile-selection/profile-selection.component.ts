import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss']
})
export class ProfileSelectionComponent implements OnInit {

	sel = {};
	index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selChange(i){
  	this.sel = {};
  	this.sel[i] = true;
  	this.index = i;
  }

  routeNext(){
	if(this.index==3){
		this.router.navigate(['/comp-signup']);
	}else{
		this.router.navigate(['/dev-signup']);
	}
  }

}
