import { Component, OnInit } from '@angular/core';
import { DatabaseViewService } from 'src/app/services/database-view.service';

@Component({
  selector: 'app-devflix',
  templateUrl: './devflix.component.html',
  styleUrls: ['./devflix.component.scss']
})
export class DevflixComponent implements OnInit {
  public getViewDevflix: any;
  public getTechDevflix: any;

  constructor(
    private databaseViewService: DatabaseViewService
  ) { }

  ngOnInit(): void {
    this.view();
    this.tech();
  }

  public view() {
    return this.getViewDevflix = this.databaseViewService.view[1]
  }

  public tech() {
    return this.getTechDevflix = this.databaseViewService.tech[1]
  }

}
