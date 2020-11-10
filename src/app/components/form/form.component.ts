import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  perfil = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(''),
    nomeMae: new FormControl('')
  });
  data: any;
  constructor() { }

  ngOnInit() {
  }
  getData() {
    this.data = this.perfil.value;
  }
}
