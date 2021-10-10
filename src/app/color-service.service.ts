import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ColorServiceService {
  //istanzio una variabile dell' api per usarla nella get
  url = "http://www.thecolorapi.com/id?hex=" 
  urlName = "https://randomuser.me/api/" 

  constructor(
    private http: HttpClient,


  ) {}
  //creo una funzione di get
    getColor(hex){
      // ti iscrivi al pacchetto HTTP
      return this.http.get(this.url + hex)
   }
   getName(){
    // ti iscrivi al pacchetto HTTP
    return this.http.get(this.urlName)}
   
}
