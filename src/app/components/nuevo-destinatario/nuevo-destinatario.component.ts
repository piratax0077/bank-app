import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserInterface } from '../../interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.css']
})
export class NuevoDestinatarioComponent implements OnInit {

  myForm: FormGroup;
  public banks!: Array<any>;
  public tipos_cuentas!: Array<any>;
  public error: boolean = true;

  constructor(public fb: FormBuilder, public api: ApiService, public cookieService: CookieService, public router: Router) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      telefono: ['', [Validators.required]],
      rut:['',[Validators.required]],
      tipo_cuenta: ['', [Validators.required]],
      nCuenta: ['', [Validators.required]],
      idBanco: ['', [Validators.required]],
    });
    this.api.getAllBanks().subscribe((i) => this.banks = i.banks);
    this.api.getTypesAccounts().subscribe((data) => this.tipos_cuentas = data.tipo_cuenta);
  }

  ngOnInit(): void {
  }

  saveData(){
    console.log(this.myForm.value);
    this.api.addUser(this.myForm.value).subscribe((i) => {
      this.error = false;
      
    })
  }

  logout(){
    const cookie = this.cookieService.check('token_access');
    if(cookie){
      this.cookieService.delete('token_access');
      this.router.navigate(['/login']);
    }
  }
  }


