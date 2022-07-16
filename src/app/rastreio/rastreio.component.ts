import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.css']
})
export class RastreioComponent implements OnInit {

  codigoDoProduto = environment.codigoDeRastreio
  estadoDoProduto = environment.estadoDoProduto
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.codigoDeRastreio == "" && environment.estadoDoProduto == ""){
      alert("Sua sessão expirou, busque por sua encomenda novamente.")
      this.router.navigate(['/'])
    }
  }

}
