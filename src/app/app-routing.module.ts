import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoDestinatarioComponent } from './components/nuevo-destinatario/nuevo-destinatario.component';
import { TestComponent } from './components/test/test.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {path:'',component: NuevoDestinatarioComponent, canActivate:[GuardGuard]},
  {path:'historial', component: HistorialComponent, canActivate:[GuardGuard]},
  {path:'transferir', component: TransferirComponent, canActivate:[GuardGuard]},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
