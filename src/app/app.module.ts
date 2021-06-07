import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialComponent } from './components/historial/historial.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { NuevoDestinatarioComponent } from './components/nuevo-destinatario/nuevo-destinatario.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    TransferirComponent,
    NuevoDestinatarioComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
