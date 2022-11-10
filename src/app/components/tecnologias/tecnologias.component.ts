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

  constructor(
    private databaseTechService: DatabaseTechService
  ) { }

  ngOnInit(): void {
    this.getDadosRefinados()
  }

  public getDadosRefinados() {
    console.log(this.getDadosBrutos)
    this.getDadosBrutos.forEach((item: any) => {
      this.dadosTecnologias.push(item.nome)
      this.dadosAnos.push(item.anos)
    })
  }

  option: EChartsOption = {
    xAxis: [
      {
        type: 'category',
        data: this.dadosTecnologias,
        axisLabel: {
          color: '#000',
          fontWeight: 'bold'
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
          fontWeight: 'bold'
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
        color: '#1976D2',
      },
    ]
  };

}
