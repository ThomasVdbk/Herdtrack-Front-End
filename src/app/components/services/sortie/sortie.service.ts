import { Injectable } from '@angular/core';
import { ISortie } from 'src/app/components/models/sortie.model';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

const apiUrlSortie = environment.API_URL+"/sorties";

@Injectable({
  providedIn: 'root'
})
export class SortieService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<ISortie[]>(apiUrlSortie);
  }
}
