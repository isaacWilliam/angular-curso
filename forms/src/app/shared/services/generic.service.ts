import { Injectable } from '@angular/core';
import {Estado} from "../../data-form/model/estado";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(
    private http: HttpClient
  ) { }

  getEstado() {
    return this.http.get<Estado[]>('assets/estados.json');
  }

  getNewsLetter() {
    return [
      {name: 'Sim', key: 0},
      {name: 'Não', key: 1}
    ]
  }

  getFramework() {
    return [{name: 'Angular'}, {name: 'Vue'}, {name: 'React'}, {name: 'Cobol'}, {name: 'Laravel'}, {name: 'Cotlin'}, {name: 'Fluter'}];
  }
}
