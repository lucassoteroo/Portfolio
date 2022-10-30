import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Aplicações
import { PokeDexComponent } from './pokedex/poke-dex.component';
import { DevflixComponent } from './devflix/devflix.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    PokeDexComponent,
    DevflixComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeDexComponent,
    DevflixComponent,
    LandingpageComponent
  ]
})
export class AplicacoesModule { }
