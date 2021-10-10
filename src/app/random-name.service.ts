import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RandomNameService {
  //istanzio una variabile dell' api per usarla nella get
  url = "https://randomuser.me/api/" 

  constructor(
    private http: HttpClient,


  ) {}
  //creo una funzione di get
    getName(){
      // ti iscrivi al pacchetto HTTP
      return this.http.get(this.url)
   }
   
}