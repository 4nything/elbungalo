import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../core/main/main.component';
import { CoreModule } from '../core/core.module';
import { ListaPreciosComponent } from '../core/lista-precios/lista-precios.component';
import { ProductosComponent } from '../core/productos/productos.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: MainComponent},
  {path: 'lista-precios', component: ListaPreciosComponent},
  {path: 'productos', component: ProductosComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'}),
    CoreModule
  ],
  exports: [RouterModule]
})
export class WebRoutingModule { }