import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TransferInterface } from '../../interfaces/transfer.interface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  public transfers!: Array<any>;
  public showTable: boolean = true;

  constructor(public api: ApiService) { 
    this.api.getAllTransfer().subscribe((item) => {
      if(item.transfers.length > 0){
        this.transfers = item.transfers;
      }else{
        this.showTable = false;
      }
      
    });
  }

  ngOnInit(): void {
  }

}
