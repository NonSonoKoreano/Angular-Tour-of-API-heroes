import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { getNsPrefix } from "@angular/compiler";
import { ColorServiceService } from "../color-service.service";
import { RandomNameService } from "../random-name.service"
//definisco il tipo Eroe
interface hero {
  name: string;
  id: number;
  sesso: string;
}
interface nuovoEroe {
  name: String;
}

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
  
})
export class HeroesComponent implements OnInit {
  title = "Eroi";

  selectedArrayHero;
  heroes;
  newHero;
  selectedHero;
  nomeColore;
  coloreImg;
  coloreHex;
  newRandomHero;
  nomeRandom;
  newRandomName;
  newName;
  newRandomGender;
  newRandomId;
  newRandomLastName;
  newRandomCity;
  newRandomState;
  newRandomFaceImg;
  constructor(private service: HeroService,
    private color: ColorServiceService) {
    this.heroes = service.getHeroes();
  }
  cancellaEroe(){
    
    this.service.deleteHero(this.selectedHero);

  }
  createRandomHero(){
        
    //creo un colore hex random
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
//istanzio la variabile con il colore hex random

      //ping
      let newcolor = getRandomColor()
      //faccio la get a color COLOR è definito nel costruttore con
      // private color: ColorServiceService
      // solo così puoi accedere alle funzione di get definita nel service

      this.color.getColor(newcolor).subscribe((risposta: any) => { 
        //pong
        this.nomeColore = risposta.name.value
        this.coloreImg = risposta.image.bare
        this.coloreHex = risposta.hex.value

        this.color.getName().subscribe((risposta: any) =>{
          let json = risposta.results[0]
        this.newRandomGender = json.gender[0]
        this.newRandomId = json.login.uuid
        this.newRandomName = json.name.first
        this.newRandomLastName = json.name.last
        this.newRandomCity = json.location.city
        this.newRandomState = json.location.state
        this.newRandomFaceImg = json.picture.large



       let newRandomHero = {
          name: this.newRandomName + " " + this.newRandomLastName,
          id: this.newRandomId,
          sesso: this.newRandomGender,
          capelli: this.nomeColore,
          capelliImg : this.coloreImg,
          capelliHex : this.coloreHex,
          bornCity: this.newRandomCity,
          bornState: this.newRandomState,
          faceImg: this.newRandomFaceImg

        };
        this.service.addHero(newRandomHero);
        console.log(this.heroes)
})


       
      })
  }
  createHero() {
 
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
//istanzio la variabile con il colore hex random
      let newcolor = getRandomColor()
      //ping
      this.color.getName().subscribe((risposta: any) =>{
        let json = risposta.results[0]
      this.newRandomGender = json.gender[0]
      this.newRandomFaceImg = json.picture.large
      this.newRandomId = json.login.uuid
      this.newRandomName = json.name.first
      this.newRandomLastName = json.name.last
      this.newRandomCity = json.location.city
      this.newRandomState = json.location.state
      })
      
      this.color.getColor(newcolor).subscribe((risposta: any) => { 
        //pong
        this.nomeColore = risposta.name.value
        this.coloreImg = risposta.image.bare
        this.coloreHex = risposta.hex.value

       

        let newHero = {
          name: this.newHero,
          id: this.newRandomId,
          sesso: this.newRandomGender,
          capelli: this.nomeColore,
          capelliImg : this.coloreImg,
          capelliHex : this.coloreHex,
          bornCity: this.newRandomCity,
          bornState: this.newRandomState,
          faceImg: this.newRandomFaceImg
        };
      this.service.addHero(newHero);
      console.log(this.heroes)

    });
    //fine delle azioni dopo il get

  }
  selezionaEroe(hero) {
    // this. serve a prendere la variabile selectedHero (altrimenti non esisterebbe)
    this.selectedHero = hero;
  }
  ngOnInit() {    this.color.getName().subscribe((risposta: any) =>{
    let json = risposta.results[0]
  this.newRandomGender = json.gender[0]
  this.newRandomId = json.login.uuid
  this.newRandomName = json.name.first
  this.newRandomLastName = json.name.last
  this.newRandomCity = json.location.city
  this.newRandomState = json.location.state
  this.newRandomFaceImg = json.picture.large



 let newRandomHero = {
    name: this.newRandomName + " " + this.newRandomLastName,
    id: this.newRandomId,
    sesso: this.newRandomGender,
    capelli: this.nomeColore,
    capelliImg : this.coloreImg,
    capelliHex : this.coloreHex,
    bornCity: this.newRandomCity,
    bornState: this.newRandomState,
    faceImg: this.newRandomFaceImg

  };
 
}) }
}
