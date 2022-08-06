import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  loginShowValidation = '';

    constructor(private fb:FormBuilder, 
                 public authService: AuthService) {

        this.form = this.fb.group({
            username: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.username && val.password) {
            this.authService.login(val.username, val.password)
                .subscribe(
                    (res) => {
                        this.loginShowValidation = res?.message;
                        if(res?.token){
                            this.authService.setSession(res.token);
                            window.location.reload();
                        }
                    }
                );
        } else {
            this.loginShowValidation = 'Please enter a username and password';
        }
    }
  
}
