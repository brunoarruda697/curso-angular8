import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from './components/crud/crud.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/pai/filho/filho.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgifNgforComponent,
    CrudComponent,
    PaiComponent,
    FilhoComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
