import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

    private  _personajes: Personaje[] = [
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder:7500
        }
      ];


      //JAVASCRIPT MANDA TODO POR REFERENCIA 
     // PARA EVITAR COLOCAMOS LAS LLAVES Y 3 PUNTOS (OPERADOR SPREAD)
    get personajes():Personaje[]{
        return [...this._personajes];
    }
    
    constructor(){
        // console.log("servicio inicializado");
    }

    agregarPersonaje(personaje:Personaje){

      this._personajes.push(personaje);

    } 

}