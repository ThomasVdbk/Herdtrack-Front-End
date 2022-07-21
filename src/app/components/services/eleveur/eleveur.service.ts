import { Injectable } from '@angular/core';
import { IEleveur } from 'src/app/components/models/eleveur.model';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

const apiUrlEleveur = environment.API_URL+"/eleveurs";

@Injectable({
  providedIn: 'root'
})
export class EleveurService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<IEleveur[]>(apiUrlEleveur);
  }
}
