import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Aplicações
import { PokeDexComponent } from './poke-dex/poke-dex.component';

@NgModule({
  declarations: [
    PokeDexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeDexComponent
  ]
})
export class AplicacoesModule { }
