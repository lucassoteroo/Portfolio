import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

// Componentes
import { SharedModule } from '../components/shared.module';

// Pages
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { TechComponent } from './pages/tech/tech.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ProjetosComponent,
    TechComponent,
    CertificadosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
