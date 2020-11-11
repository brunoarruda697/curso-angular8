import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { PaiComponent } from './components/pai/pai.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormComponent } from './components/form/form.component';
import { DepartamentoDetalheComponent } from './components/departamento-detalhe/departamento-detalhe.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';

const routes: Routes = [
  {
    path: '',
    component: NgifNgforComponent,
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazyloading/lazyloading.module').then(
        module => module.LazyloadingModule
      )
  },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'ngif-ngfor', component: NgifNgforComponent },
  { path: 'pai', component: PaiComponent },
  { path: 'form', component: FormComponent },
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'departamento/:id', component: DepartamentoDetalheComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
