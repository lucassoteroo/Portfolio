import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public valor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    console.log('teste')
    if (this.valor === true) {
      this.valor = false;
    } else if (this.valor === false) {
      this.valor = true;
    }
  }

}
