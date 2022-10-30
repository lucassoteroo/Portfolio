import { Component, OnInit } from '@angular/core';
import { DatabaseViewService } from 'src/app/services/database-view.service';

@Component({
  selector: 'app-poke-dex',
  templateUrl: './poke-dex.component.html',
  styleUrls: ['./poke-dex.component.scss']
})
export class PokeDexComponent implements OnInit {
  public getViewPokedex: any;
  public getTechPokedex: any;

  constructor(
    private databaseViewService: DatabaseViewService
  ) { }

  ngOnInit(): void {
    this.view();
    this.tech();
    console.log(this.databaseViewService.view[1])
  }

  public view() {
    return this.getViewPokedex = this.databaseViewService.view[0]
  }

  public tech() {
    return this.getTechPokedex = this.databaseViewService.tech[0]
  }

}
