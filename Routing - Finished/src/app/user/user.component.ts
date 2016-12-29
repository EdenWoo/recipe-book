import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy {

  //prevent memory leak
  private subscription: Subscription;

  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

   //initailze once
    //this.id = activatedRoute.snapshot.params['id'];

    //---------retrive fragment---------
    // this.subscription = this.route.fragment.subscribe(
    //     fragment => console.log(fragment);
    // );

     //reactive get params
    //retrive params from route
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
  }

  onNavigate() {
    //query params ?analytics=100
    this.router.navigate(
      ['/'],
      {
        queryParams: {'analytics': 100},
        preserveQueryParams: true
      });
  }

  //prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
