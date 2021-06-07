import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;
  public error!: string;

  constructor(public fb: FormBuilder, public api: ApiService, public router: Router, public cookieService: CookieService) {
  
    this.formLogin = this.fb.group({
      email:['', [Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  sendData(){
    
    this.api.login(this.formLogin.value).subscribe((v)=>{

      if(v.msg){
        this.error = v.msg;
      }else{
        this.cookieService.set('token_access',v.accessToken,4,'/');
        this.router.navigate(['/']);
      }
      
    })
  }

}
