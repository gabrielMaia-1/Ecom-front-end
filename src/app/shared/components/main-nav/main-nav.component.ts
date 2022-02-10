import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'ecom-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  logout()
  {
    this._auth.logout();
  }

}
