import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Rastreio } from '../Model/Rastreio';
import { RastreioService } from '../service/rastreio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rastreioMod: Rastreio = new Rastreio
  encomenda: Rastreio
  pesquisarEncomendaCodigo: string

  constructor(
    private rastreioService: RastreioService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  buscar(){
    this.rastreioService.getencomendas(this.pesquisarEncomendaCodigo).subscribe((resp: Rastreio) => {
      this.encomenda = resp
      this.router.navigate(['/rastrear'])

      environment.estadoDoProduto = this.encomenda.estadoDoProduto
      environment.codigoDeRastreio = this.pesquisarEncomendaCodigo
      console.log(this.encomenda)
      console.log(environment.codigoDeRastreio)
      console.log(environment.estadoDoProduto)
      
    }, erro => {
      if(erro.status == 500){
        alert("Essa encomenda não existe")
      }
    })
  }



}
