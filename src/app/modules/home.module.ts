import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

// Componentes
import { SharedModule } from '../components/shared.module';

// Pages
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { TechComponent } from './pages/tech/tech.component';
import { CertificadosPageComponent } from './pages/certificados/certificados-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ProjetosComponent,
    TechComponent,
    CertificadosPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
