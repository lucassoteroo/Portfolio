import { Component, OnInit } from '@angular/core';
import { DatabaseCertificadosService } from 'src/app/services/database-certificados.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent implements OnInit {
  panelOpenState = false;
  getDadosCertificados = this.databaseCertificadosService.certificados[0];
  dadosTitulosCertificados: any = [];
  dadosCertificadosJs: any = [];
  dadosCertificadosTs: any = [];
  dadosCertificadosAngular: any = [];
  dadosCertificadosDocker: any = [];
  dadosCertificadosSql: any = [];

  constructor(
    private databaseCertificadosService: DatabaseCertificadosService
  ) { }

  ngOnInit(): void {
    this.getDadosRefinados(this.getDadosCertificados);
  }

  getDadosRefinados(dadosCertificados: any) {
    const titulosCertificados: any = []

    dadosCertificados.forEach((item: any) => {
      titulosCertificados.push(item.sobre);

      if (item.sobre === 'Javascript') {
        this.dadosCertificadosJs.push(item.image)
      }
      if (item.sobre === 'Typescript') {
        this.dadosCertificadosTs.push(item.image)
      }
      if (item.sobre === 'Angular') {
        this.dadosCertificadosAngular.push(item.image)
      }
      if (item.sobre === 'Docker') {
        this.dadosCertificadosDocker.push(item.image)
      }
      if (item.sobre === 'MySQL') {
        this.dadosCertificadosSql.push(item.image)
      }
    })

    this.dadosTitulosCertificados = [...new Set(titulosCertificados)]
  }



}
