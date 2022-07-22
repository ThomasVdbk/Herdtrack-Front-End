import {Injectable} from '@angular/core';
import {IParc} from 'src/app/components/models/parc.model';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

const apiUrlParc = environment.API_URL + "/parcs";

@Injectable({
  providedIn: 'root'
})
export class ParcService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<IParc[]>(apiUrlParc);
  }
}
