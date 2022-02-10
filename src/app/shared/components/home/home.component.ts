import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ecom-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public _router: Router) { }

  ngOnInit(): void {
    if(this._router.url == '/home')
      this._router.navigate(['/home/dashboard']);

  }

}
