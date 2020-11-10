import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { PaiComponent } from './components/pai/pai.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
