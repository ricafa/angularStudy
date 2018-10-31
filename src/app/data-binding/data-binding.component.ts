import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: String  = 'www.google.com.br' ;

  cursoAngular = true;

  urlImagem: String = 'https://picsum.photos/200/300';


  getValor() {
    return 1;
  }

  constructor() {}

  ngOnInit() {
  }

}
