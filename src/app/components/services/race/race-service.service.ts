import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IRace } from '../../models/race.model';

const apiUrlRaces = environment.API_URL+"/races"

@Injectable({
  providedIn: 'root'
})
export class RaceServiceService {

  constructor(private http:HttpClient) { }
  findAll(){
         return this.http.get<IRace[]>(apiUrlRaces);
       }
}





