import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserInterface } from '../../interfaces/user.interface';
import {TransferInterface} from '../../interfaces/transfer.interface';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {

  public users!: Array<any>;
  public userSelected: UserInterface;
  public transfer: TransferInterface;
  public monto: any;
  public showUsers: boolean = false;
  public error: boolean = true;
  formTransfer: FormGroup;

  constructor(public api: ApiService, public fb: FormBuilder) { 
    this.formTransfer = this.fb.group({
      monto: ['',[Validators.required, Validators.pattern("^[0-9]*$")]]
    });
    
    this.api.getAllUsers().subscribe((users) =>{ 
      if(users.users.length == 0){
        this.showUsers = true;
      }else{
        this.users = users.users;
        this.showUsers = false;
      }
      
    });
    this.userSelected = {
      id:'',
      nombre: '',
      correo: '',
      rut: '',
      banco:'',
      n_cuenta: 0,
      telefono: 0,
      tipo_cuenta:{
        descripcion:''
      }
    };

    this.transfer = {
      bank_id:'',
      destinatario_id: '',
      monto:0,
      rut:'',
      telefono:0,
      tipo_cuenta: {
        descripcion:''
      }
    }
  }

  ngOnInit(): void {
    
  }

  getUserById(id: string){
    this.api.getUserById(id).subscribe(user => {
      this.userSelected = user.user;
    } )
  }

  doTransfer(user:any,monto: number){

    this.transfer.destinatario_id =user._id;
    this.transfer.bank_id = user.banco;
    this.transfer.monto = monto;
    this.transfer.rut = user.rut;
    this.transfer.telefono = user.telefono;
    this.transfer.tipo_cuenta = user.tipo_cuenta;

    this.api.addTransfer(this.transfer).subscribe((i) => {
      this.error = false;
    })

  }

}
