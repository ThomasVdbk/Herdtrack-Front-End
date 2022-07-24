import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAnimal } from '../../models/animal.model';
import { Observable } from 'rxjs';

const apiUrlEleveur = environment.API_URL+"animal";


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http:HttpClient) {
     }
     findAll(){
    return this.http.get<IAnimal[]>(apiUrlEleveur);
  }

  save(animal:IAnimal):Observable<IAnimal>{
    console.log("PEPITO");
    return this.http.post<IAnimal>(apiUrlEleveur,animal);
    
  }
}
