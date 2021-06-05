import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserInterface } from '../../interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(public fb: FormBuilder, public api: ApiService) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
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
  }


