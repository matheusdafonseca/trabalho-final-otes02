import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartao } from '../models/cartao';

@Injectable({
  providedIn: 'root'
})
export class AdicionarCartaoService {

  url = 'api/cartao-tarefas'

  constructor(private http: HttpClient) { }

  adicionaCartao(cartao: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>(this.url, cartao)
  }

  getCartoesAndamento(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${this.url}/andamento`);
  }

  getCartoesAtraso(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${this.url}/atrasado`);
  }
  
  deletarCartao(id: number): Observable<Cartao> {
    return this.http.delete<Cartao>(`${this.url}/${id}`);
  }
}
