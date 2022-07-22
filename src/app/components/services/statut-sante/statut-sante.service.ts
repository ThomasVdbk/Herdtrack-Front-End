import { Injectable } from '@angular/core';
import { IStatutSante } from 'src/app/components/models/statutSante.model';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

const apiUrlStatutSante = environment.API_URL+"/sorties";

@Injectable({
  providedIn: 'root'
})
export class StatutSanteService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<IStatutSante[]>(apiUrlStatutSante);
  }
}
