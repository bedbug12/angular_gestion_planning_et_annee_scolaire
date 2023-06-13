import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Professeur, ProfesseurAdd } from '../models/professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  url=`${environment.API_URL}/professeurs`

  constructor(private http:HttpClient) { }
  getAllProfesseur():Observable<Professeur[]>{
    return this.http.get<Professeur[]>(`${this.url}`)
  }


  addProfesseur(professeur:ProfesseurAdd):Observable<ProfesseurAdd>{
    return this.http.post<ProfesseurAdd>(`${this.url}`,professeur)
  }

  getProfesseurById(id:number):Observable<Professeur>{
    return this.http.get<Professeur>(`${this.url}/${id}`)
  }
  
  updateProfesseur(id: number, cours: ProfesseurAdd): Observable<ProfesseurAdd> {
    return this.http.put<ProfesseurAdd>(`${this.url}/${id}`, cours);
  }
  
  deleteProfesseur(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}

