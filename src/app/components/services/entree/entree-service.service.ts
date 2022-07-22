import { Injectable } from '@angular/core';
import { IEntree } from 'src/app/components/models/entree.model';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

const apiUrlEntree = environment.API_URL+"/entrees";

@Injectable({
  providedIn: 'root'
})

export class EntreeService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<IEntree[]>(apiUrlEntree);
  }
}
