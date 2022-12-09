import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseCertificadosService {
  private certificadosView: any = [
    {
      sobre: 'Javascript',
      image: './assets/images/certificados/programacaoParaInternetComJs.jpg',
    },
    {
      sobre: 'Javascript',
      image: './assets/images/certificados/jsEs6Essencial.jpg',
    },
    {
      sobre: 'Typescript',
      image: './assets/images/certificados/dominandoTypescript.jpg',
    },
    {
      sobre: 'Angular',
      image: './assets/images/certificados/angularAvancado(v13)typescriptAvancado.jpg',
    },
    {
      sobre: 'Docker',
      image: './assets/images/certificados/dockerFerramentaEssencialParaDesenvolvedores.jpg',
    },
    {
      sobre: 'MySQL',
      image: './assets/images/certificados/bancoDeDadosSqlDoBasicoAoAvancado.jpg',
    },
  ]

  constructor() { }

  public certificados: any = [
    this.certificadosView
  ]
}
