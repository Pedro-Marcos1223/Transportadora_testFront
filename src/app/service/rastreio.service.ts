import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Rastreio } from '../Model/Rastreio';

@Injectable({
  providedIn: 'root'
})
export class RastreioService {

  constructor(
    private http: HttpClient
  ) { }



  criarEncomenda(encomenda: Rastreio): Observable<Rastreio>{
    return this.http.post<Rastreio>('http://localhost:8080/rastreio/criarencomenda', encomenda)
  }

  getencomendas(codigoDeRastreio: string): Observable<Rastreio>{
    return this.http.get<Rastreio>(`http://localhost:8080/rastreio/rastrear/${codigoDeRastreio}`)
  }

}
