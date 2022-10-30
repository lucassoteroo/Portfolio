import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Aplicações
import { PokeDexComponent } from './pokedex/poke-dex.component';
import { DevflixComponent } from './devflix/devflix.component';

@NgModule({
  declarations: [
    PokeDexComponent,
    DevflixComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeDexComponent,
    DevflixComponent
  ]
})
export class AplicacoesModule { }
