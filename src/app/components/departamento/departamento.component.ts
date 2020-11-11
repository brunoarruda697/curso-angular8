import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  departamentos = [
    { id: 1, nome: 'Tecnologia' },
    { id: 2, nome: 'Finanças' },
    { id: 3, nome: 'Controladoria' },
    { id: 4, nome: 'Recursos Humanos' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(departamento) {
    this.router.navigate(['/departamento', departamento.id]);
  }
}
