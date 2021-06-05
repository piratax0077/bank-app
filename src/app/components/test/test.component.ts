import { Component, OnInit } from '@angular/core';
import { iValidation } from 'src/app/interfaces/iValidations.metadata';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public banks!:Array<any>;
  public tipos_cuentas!: Array<any>;
  public user: {
    rut:iValidation,
    email:iValidation,
    nCuenta:iValidation,
    nombre: iValidation,
    telefono: iValidation,
    banco: iValidation,
    tipo_cuenta: iValidation
  }

  constructor(public api: ApiService) {
    this.api.getAllBanks().subscribe((i)=>{
      this.banks = i.banks
    })
    this.api.getTypesAccounts().subscribe((data) => this.tipos_cuentas = data.tipo_cuenta);
     this.user = {
       rut:{
         val:'',
         msg:'El campo es requerido',
         isValid(){
           const pattern = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
           const rutValidation = pattern.test(this.val);
           if(this.val === ''){
            this.msg = 'El campo es requerido'
           }else{
             this.msg = 'El rut es incorrecto'
           }
           return rutValidation;
         }
       },
       email:{
         val:'',
         msg:'El campo es requerido',
         isValid(){
           const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
           const emailValidation = pattern.test(this.val);
           if(this.val === ''){
            this.msg = 'El email es requerido'
           }else{
             this.msg = 'El email no es valido';
           }
           return emailValidation;
         }
       },
       nCuenta:{
         val:'',
         msg:'El campo es requerido',
         isValid(){
           const pattern = /[0-9]/;
           const nCuentaValidation = pattern.test(this.val);
           if(this.val === ''){
            this.msg = 'El campo es requerido'
           }else{
             this.msg = 'Debe ingresar solo numeros'
           }

           return nCuentaValidation;
         }
       },
       nombre:{
         val:'',
         msg:'El campo es requerido',
         isValid(){
           const pattern = /[A-Za-z]+/
          const nombreValidation = pattern.test(this.val);
          if(this.val === ''){
            this.msg = 'El campo es requerido'
          }else{
            this.msg = 'Solo debe contener letras'
          }
          return nombreValidation;
         }
       },
       banco:{
         val:'',
         msg:'El campo es requerido',
         isValid(){
           if(this.val === ''){
            this.msg = 'El campo es requerido'
           }
           return true;
         }
       },
       telefono:{
         val:'',
         msg:'El campo es requerido',
         isValid(){
           const pattern = /[0-9]+/
           const telefonoValidation = pattern.test(this.val);
           if(this.val === ''){
            this.msg = 'El campo es requerido'
           }else{
             this.msg ='Solo debe ingresar numeros'
           }
           return telefonoValidation;
         }
       },
       tipo_cuenta:{
         val:'',
         msg:'El campo es requerido',
         isValid(){
           if(this.val === ''){
            this.msg='El campo es requerido'
           }
           return true;
         }
       }
     }
   }

  ngOnInit(): void {
  }

}
