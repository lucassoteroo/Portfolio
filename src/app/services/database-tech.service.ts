import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseTechService {
  private techView: any = [
    {
      image: '../../../assets/images/icons/ico-html.svg',
      nome: 'HTML 5',
      anos: 4,
      cursos: [
        '- Densenvolvimento Front-End do Zero ao Pro',
        '- Curso em Vídeo'
      ]
    },
    {
      image: '../../../assets/images/icons/ico-css.svg',
      nome: 'CSS 3',
      anos: 4,
      cursos: [
        '- Densenvolvimento Front-End do Zero ao Pro',
        '- Curso em Vídeo'
      ]
    },
    {
      image: '../../../assets/images/icons/ico-javascript.svg',
      nome: 'Javascript',
      anos: 3,
      cursos: [
        '- Programação para Internet com Javascipt',
        '- Introdução a Biblioteca JQuery',
        '- Javascipt ES6 Essencial',
        '- Curso em Vídeo',
        '- Densenvolvimento Front-End do Zero ao Pro'
      ]
    },
    {
      image: '../../../assets/images/icons/ico-angular.svg',
      nome: 'Angular',
      anos: 2,
      cursos: [
        '- Instalando e Preparando o Ambiente Angular',
        '- Introdução Ao Angular 8',
        '- Curso de Angular 2 (v14+) Typescript do Básico ao Avançado'
      ]
    },
    {
      image: '../../../assets/images/icons/ico-typescript.svg',
      nome: 'Typescript',
      anos: 2,
      cursos: [
        '- Dominando Typescript'
      ]
    },
    {
      image: '../../../assets/images/icons/ico-mysql.svg',
      nome: 'MySQL',
      anos: 1,
      cursos: [
        '- Banco de Dados SQL do Zero ao Avançado 2022'
      ]
    },
  ]

  constructor() { }

  public tech: any = [
    this.techView
  ]

}
