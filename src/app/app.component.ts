import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { Produto } from './card-produto/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  
  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string = ''

  produtos: Produto[] = []

  adcionarProduto(evento: any): void {
    evento.preventDefault()
    evento.stopPropagation()
    this.produtos.push({nome: this.nome, imagem: this.imagem, preco: this.preco, estoque:this.estoque, descricao: this.descricao})
    this.apagarInputs()
  }

  onExcluirProdutoEvento(p: Produto){
    for(let i = 0; i < this.produtos.length; i++ ){
      if(this.produtos[i].nome == p.nome){
        this.produtos.splice(i,1)
      }
    }
  }

  apagarInputs(): void{
    this.nome = ''
    this.imagem = ''
    this.preco = 0
    this.estoque = 0
    this.descricao = ''
  }

}
// preventDefaut() faz com que o comportamento padrão de um elemento HTML seja anulado.
// stopPropagation() evita com que a emissão do evento afete outros elementos html.
