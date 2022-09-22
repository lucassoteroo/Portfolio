import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { NavComponent } from './home/nav/nav.component';
import { ApresentacaoComponent } from './home/apresentacao/apresentacao.component';
import { DadosComponent } from './sobre/dados/dados.component';
import { ResumoComponent } from './sobre/resumo/resumo.component';
import { FormacaoComponent } from './sobre/formacao/formacao.component';


@NgModule({
  declarations: [
    NavComponent,
    ApresentacaoComponent,
    DadosComponent,
    ResumoComponent,
    FormacaoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavComponent,
    ApresentacaoComponent
  ]
})
export class SharedModule { }
