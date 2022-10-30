import { Component, OnInit } from '@angular/core';
import { DatabaseViewService } from 'src/app/services/database-view.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  public getViewLandingPage: any;
  public getTechLandingPage: any;

  constructor(
    private databaseViewService: DatabaseViewService
  ) { }

  ngOnInit(): void {
    this.view();
    this.tech();
  }

  public view() {
    return this.getViewLandingPage = this.databaseViewService.view[2]
  }

  public tech() {
    return this.getTechLandingPage = this.databaseViewService.tech[2]
  }
}
