import { Injectable } from '@angular/core';
import { AnneeScolaire, AnneeScolaireAdd } from '../models/annee-scolaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnneeScolaireService {
  anneeScolaire:AnneeScolaire[]=[]
  private url =`${environment.API_URL}/annees-scolaires`
  constructor(private http:HttpClient) { }

  getAllAnneeScolaire():Observable<AnneeScolaire[]>{
    return this.http.get<AnneeScolaire[]>(`${this.url}`);
    // for (let index = 20; index < 31; index++) {
    //   this.anneeScolaire.push({
    //     libelle:`20${index}`
    //   })
    // }
    // return this.anneeScolaire
  }

  addAnneeScolaire(annee:AnneeScolaireAdd):Observable<AnneeScolaireAdd>{
    console.log(annee)
    return this.http.post<AnneeScolaireAdd>(`${this.url}`,annee)
  }

  getAnneeScolaireById(id:number):Observable<AnneeScolaire>{
    return this.http.get<AnneeScolaire>(`${this.url}/${id}`)
  }

  updateAnneeScolaire(anneeScolaireId: number, annee: AnneeScolaireAdd): Observable<AnneeScolaireAdd> {
    return this.http.put<AnneeScolaireAdd>(`${this.url}/${anneeScolaireId}`, { annee });
  }

  deleteAnneeScolaire(anneeScolaireId: number): Observable<any> {
    return this.http.delete(`${this.url}/${anneeScolaireId}`);
  }
}
