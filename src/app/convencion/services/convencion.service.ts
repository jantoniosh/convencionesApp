import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada.interface';
@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private apiUrl: string = 'http://localhost:5139';

  get httpParams() {
    return new HttpParams().set('fields', 'convencion');
  }


  constructor(private http: HttpClient) { }

  buscarEntradas(): Observable<Entrada[]> {
    const url = `${this.apiUrl}/getentradas`;
    return this.http.get<Entrada[]>(url);
  }

  buscarPodcasts(convencion: string): Observable<Entrada[]> {
    const url = `${this.apiUrl}/getpodcasts?convencion=${convencion}`;
    return this.http.get<Entrada[]>(url);
  }

  buscarInfografias(convencion: string): Observable<Entrada[]> {
    const url = `${this.apiUrl}/getinfografias?convencion=${convencion}`;
    return this.http.get<Entrada[]>(url);
  }

  buscarFichas(convencion: string): Observable<Entrada[]> {
    const url = `${this.apiUrl}/getfichas?convencion=${convencion}`;
    return this.http.get<Entrada[]>(url);
  }

  buscarEntrada(ruta: string): Observable<Entrada> {
    const url = `${this.apiUrl}/getentrada?ruta=${ruta}`;
    return this.http.get<Entrada>(url);
  }

  buscarTitulo(titulo: string): Observable<Entrada[]> {
    const url = `${this.apiUrl}/gettitulo?titulo=${titulo}`;
    return this.http.get<Entrada[]>(url);
  }
}
