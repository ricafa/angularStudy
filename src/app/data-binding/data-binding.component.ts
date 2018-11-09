import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: String  = 'www.google.com.br' ;

  nomeDoCurso: String = 'Angular';

  cursoAngular = true;

  valorAtual: String = '';

  valorInicial = 10;

  urlImagem: String = 'https://picsum.photos/200/300';


  getValor() {
    return 1;
  }

  clique() {
    alert('botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    console.log(evento);
    console.log((<HTMLInputElement>evento.target).value);
    if (evento.key === '5') {
      console.log('você digitou o numero 5');
    }
  }

  onMudouValor(event) {
    console.log(event);
    console.log(event.novoValor);
  }

  constructor() {}

  ngOnInit() {
  }

}
