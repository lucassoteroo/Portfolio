import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

// Componentes
import { SharedModule } from '../components/shared.module';

// Pages
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
