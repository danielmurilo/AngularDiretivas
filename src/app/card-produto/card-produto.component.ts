import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from './Produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input()
  prod: Produto = {
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0
  }

  mostrarProduto: boolean = true

  esconderProduto(): void{
    this.mostrarProduto = false
  }

  @Output() excluirProdutoEvento = new EventEmitter<any>();

  onClickExcluir(){
    this.excluirProdutoEvento.emit(this.prod);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
