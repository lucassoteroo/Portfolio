import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Angular Material
import { MatTabsModule } from '@angular/material/tabs';

// Components
import { NavComponent } from './home/nav/nav.component';
import { ApresentacaoComponent } from './home/apresentacao/apresentacao.component';
import { DadosComponent } from './sobre/dados/dados.component';
import { FormacaoComponent } from './sobre/formacao/formacao.component';
import { TabsComponent } from './projetos/tabs/tabs.component';

@NgModule({
  declarations: [
    NavComponent,
    ApresentacaoComponent,
    DadosComponent,
    FormacaoComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTabsModule
  ],
  exports: [
    NavComponent,
    ApresentacaoComponent,
    DadosComponent,
    FormacaoComponent,
    TabsComponent,
    MatTabsModule
  ]
})
export class SharedModule { }
