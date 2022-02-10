import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, delay, finalize } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'ecom-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  showSpinner: boolean = false;

  loginForm: FormGroup = this._fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private _auth: AuthService,
              private _router: Router,
              private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginForm.updateValueAndValidity();
    if(!this.loginForm.valid) return;

    this.showSpinner = true;
    this._auth.login(this.loginForm.value)
    .pipe(delay(1000),finalize(()=> {this.showSpinner = false}))
    .subscribe( res => {
      if(res) this._router.navigate(['/home']);
      else this.showSpinner = false;
    });
  }
}
