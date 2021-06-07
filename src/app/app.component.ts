import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app';
  public op!: boolean;
  
  getAuth(v: any){
    this.op = v;
    console.log(this.op);
  }
}
