import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseViewService {
  private pokedexView: any = [
    {
      image: '../../../../../assets/images/aplicacoes/pokedexHome.png',
      text: 'Tela de início da aplicação onde contém a lista de 100 Pokemons, contendo seu nome e seu tipo. A barra de pesquisa permite pesquisar um Pokemon por seu nome.',
    },
    {
      image: '../../../../../assets/images/aplicacoes/pokedexIndex.png',
      text: 'Tela de detalhes é aberta ao clicar em um Pokemon na tela de início, nela contém uma foto, as estatísticas do Pokemon selecionado e seu nome em Japonês.',
    },
  ]

  private pokedexTech: any = [
    {
      tech: 'Angular',
      image: '../../../../../assets/images/icons/ico-angular.svg'
    },
    {
      tech: 'Typescript',
      image: '../../../../../assets/images/icons/ico-typescript.svg'
    },
    {
      tech: 'Sass',
      image: '../../../../../assets/images/icons/ico-sass.svg'
    }
  ]

  private devflixView: any = [
    {
      image: '../../../../../assets/images/aplicacoes/devflixHome.png',
      text: 'Tela de início da aplicação onde tem um modal de cadastro, nele contém campos de nome, sobrenome e senha. Onde o campo de email e senha são obrigatórios.',
    },
    {
      image: '../../../../../assets/images/aplicacoes/devflixIndex.png',
      text: 'Tela inicial da aplicação contém um clone da tela da netflix, contando com um carrosel. Ao clicar no filme, o usuário é redirecionado para um trailer do filme no youtube.',
    }
  ]

  private devflixTech: any = [
    {
      tech: 'Javascript',
      image: '../../../../../assets/images/icons/ico-javascript.svg'
    },
    {
      tech: 'Sass',
      image: '../../../../../assets/images/icons/ico-sass.svg'
    }
  ]

  private langingPageView: any = [
    {
      image: '../../../../../assets/images/aplicacoes/landingPage01.png',
      text: 'Texto da imagem 1',
    },
    {
      image: '../../../../../assets/images/aplicacoes/landingPage02.png',
      text: 'Texto da imagem 2',
    },
    {
      image: '../../../../../assets/images/aplicacoes/landingPage03.png',
      text: 'Texto da imagem 3',
    },
    {
      image: '../../../../../assets/images/aplicacoes/landingPage04.png',
      text: 'Texto da imagem 4',
    }
  ]

  private langingPageTech: any = [
    {
      tech: 'Angular',
      image: '../../../../../assets/images/icons/ico-angular.svg'
    },
    {
      tech: 'Typescript',
      image: '../../../../../assets/images/icons/ico-typescript.svg'
    },
    {
      tech: 'Sass',
      image: '../../../../../assets/images/icons/ico-sass.svg'
    }
  ]

  public view: any = [
    this.pokedexView,
    this.devflixView,
    this.langingPageView
  ]

  public tech: any = [
    this.pokedexTech,
    this.devflixTech,
    this.langingPageTech
  ]

  constructor() { }

}
