import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  numero: number;
  nome: string;
  data = new Date();
  constructor() { }
  ngOnInit() {
  }
}
