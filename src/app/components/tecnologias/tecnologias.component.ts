import { Component, OnInit } from '@angular/core';
import { DatabaseTechService } from 'src/app/services/database-tech.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  public getTech: any;

  constructor(
    private databaseTechService: DatabaseTechService
  ) { }

  ngOnInit(): void {
  }

  public tech() {
    return this.getTech = this.databaseTechService.tech;
  }

}
