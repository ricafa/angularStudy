import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal: String;
  cursos: string[] = ['Java', 'Go', 'Ruby'];

  constructor() {
    this.nomePortal = 'www.google.com.br';
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

  ngOnInit() {
  }

}