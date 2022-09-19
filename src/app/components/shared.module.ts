import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { NavComponent } from './nav/nav.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';


@NgModule({
  declarations: [
    NavComponent,
    ApresentacaoComponent
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
