import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { TransferInterface } from '../interfaces/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Dirección de backend local
  url: string = "http://localhost:3700";
  
  // Dirección de backend externo
  url_: string = 'https://bast.dev/api/banks.php';

  constructor(protected http: HttpClient) { }

  getAllBanks(): Observable<any>{
    return this.http.get(this.url_);
  }

  getAllUsers(): Observable<any>{
    return this.http.get(this.url+'/users');
  }

  addUser(user: UserInterface): Observable<any>{
    return this.http.post(this.url+'/save-user',user);
  }

  getUserById(id: string): Observable<any>{
    return this.http.get(this.url+'/user/'+id);
  }

  getTypesAccounts():Observable<any>{
    return this.http.get(this.url+'/tipo_cuenta');
  }

  addTransfer(transfer: TransferInterface):Observable<any>{
    return this.http.post(this.url+'/add-transfer',transfer);
  }

  getAllTransfer(): Observable<any>{
    return this.http.get(this.url+'/transfer/');
  }
}
