import { Injectable } from '@angular/core';
import { ICarnetSanitaire } from 'src/app/components/models/carnetSanitaire.model';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

const apiUrlCarnetSanitaire = environment.API_URL+"/carnetsanitaires";

@Injectable({
  providedIn: 'root'
})
export class CarnetSanitaireService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<ICarnetSanitaire[]>(apiUrlCarnetSanitaire);
  }
}
