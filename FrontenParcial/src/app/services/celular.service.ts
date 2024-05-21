import { Injectable } from '@angular/core';
import axios from "axios";
import { Celular } from '../models/celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {
  private url = "http://localhost:8080/parcial/celular";

  constructor() { }

  getAll(): Promise<Celular[]>{
    return axios.get(this.url).then(response => {
      console.log("Datos obtenidos: ", response.data);
      return response.data;
    });
  }
}
