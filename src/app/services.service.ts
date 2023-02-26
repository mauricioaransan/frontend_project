import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Firma} from "./firma";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  //URL to get All Firmas from BackEnd (API)
  private BASE_URL = "http://localhost:8091/api/v1/firmas";


  constructor( private httpClient: HttpClient) { }

  getAllFirmaList():Observable<Firma[]>{
    return this.httpClient.get<Firma[]>(`${this.BASE_URL}`)
  }

  addFirma(firma : Firma): Observable<Object> {
    return this.httpClient.post(`${this.BASE_URL}`,firma)
  }

  updateFirma(id:number, firma:Firma): Observable<Object> {
    return this.httpClient.put(`${this.BASE_URL}/${id}`,firma);
  }

  getFirmaByID(id:number):Observable<Firma>{
    return this.httpClient.get<Firma>(`${this.BASE_URL}/${id}`)
  }

  deteleFirmaById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.BASE_URL}/${id}`)
  }
}
