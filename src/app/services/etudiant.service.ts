import { Injectable } from '@angular/core';
import { Etudiant, EtudiantAdd } from '../models/etudiant';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiant:Etudiant[]=[]
  url=`${environment.API_URL}/etudiants`

  constructor(private http:HttpClient) { }
  getAllEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${this.url}`)
  }

  addEtudiant(etudiant:EtudiantAdd):Observable<EtudiantAdd>{
    return this.http.post<EtudiantAdd>(`${this.url}`,etudiant)
  }

  getEtudiantById(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.url}/${id}`)
  }

  updateEtudiant(id: number, cours: EtudiantAdd): Observable<EtudiantAdd> {
    return this.http.put<EtudiantAdd>(`${this.url}/${id}`, cours);
  }

  deleteEtudiant(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
