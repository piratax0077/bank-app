import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { NuevoDestinatarioComponent } from './components/nuevo-destinatario/nuevo-destinatario.component';
import { TransferirComponent } from './components/transferir/transferir.component';

const routes: Routes = [
  {path:'',component: NuevoDestinatarioComponent},
  {path:'historial', component: HistorialComponent},
  {path:'transferir', component: TransferirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
