import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarEncomendaComponent } from './criar-encomenda/criar-encomenda.component';
import { MenuComponent } from './menu/menu.component';
import { RastreioComponent } from './rastreio/rastreio.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'rastrear', component: RastreioComponent},
  {path: 'criarencomenda', component: CriarEncomendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
