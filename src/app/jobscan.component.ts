import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'jobscan-app',
  templateUrl: 'jobscan.component.html',
  styleUrls: ['jobscan.component.css']
})
export class JobscanAppComponent {
  title = 'jobscan works!';
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
	  this.items = af.database.list('/items');
  }
}
