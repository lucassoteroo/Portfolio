import { Component, OnInit } from '@angular/core';
import { DatabaseTechService } from 'src/app/services/database-tech.service';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  getDadosBrutos: any = this.databaseTechService.tech[0];
  dadosTecnologias: any = [];
  dadosAnos: any = [];
  dadosPrincipais: any = [];
  dadosCursosHtml: any = [];
  dadosCursosCss: any = [];
  dadosCursosJs: any = [];
  dadosCursosAngular: any = [];
  dadosCursosTs: any = [];
  dadosCursosMySql: any = [];

  constructor(
    private databaseTechService: DatabaseTechService,
  ) { }

  ngOnInit(): void {
    this.getDadosRefinados()
  }

  public getDadosRefinados() {
    this.getDadosBrutos.forEach((item: any) => {
      this.dadosTecnologias.push(item.nome)
      this.dadosAnos.push(item.anos)
      this.dadosPrincipais.push({ nome: item.nome, img: item.image })
      this.getCursos(item.nome, 'HTML 5', item.cursos, this.dadosCursosHtml, item)
      this.getCursos(item.nome, 'CSS 3', item.cursos, this.dadosCursosCss, item)
      this.getCursos(item.nome, 'Javascript', item.cursos, this.dadosCursosJs, item)
      this.getCursos(item.nome, 'Angular', item.cursos, this.dadosCursosAngular, item)
      this.getCursos(item.nome, 'Typescript', item.cursos, this.dadosCursosTs, item)
      this.getCursos(item.nome, 'MySQL', item.cursos, this.dadosCursosMySql, item)
    })
  }

  public getCursos(itemNome: any, nome: string, itemCursos: any, newArray: any, item: any) {
    if (itemNome == nome) {
      newArray.push({ image: item.image })
      for (let curso of itemCursos) {
        newArray.push({ nome: curso })
      }
    }
  }

  option: EChartsOption = {
    xAxis: [
      {
        type: 'category',
        data: this.dadosTecnologias,
        axisLabel: {
          color: '#000',
          fontWeight: 'bold',
          fontSize: '16'
        },
        axisLine: {
          lineStyle: {
            color: '#000'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 5,
        interval: 1,
        axisLabel: {
          formatter: '{value} ano(s)',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '16'
        },
        splitLine: {
          lineStyle: {
            color: ['#000']
          }
        }
      }
    ],
    series: [
      {
        name: 'ano',
        type: 'bar',
        data: this.dadosAnos,
        color: '#1C1C1C',
      },
    ]
  };

}
