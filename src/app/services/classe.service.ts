import { Injectable } from '@angular/core';
import { Classe, ClasseAdd } from '../models/classe';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private url =`${environment.API_URL}/classes`
  constructor(private http:HttpClient) { }

  getAllClasses():Observable<Classe[]>{
    return this.http.get<Classe[]>(`${this.url}`)
  }


  addClasse(classe:ClasseAdd):Observable<ClasseAdd>{
    return this.http.post<ClasseAdd>(`${this.url}`,classe)
  }


  getClasseById(id:number):Observable<Classe>{
    return this.http.get<Classe>(`${this.url}/${id}`)
  }

  updateClasse(id: number, classe: ClasseAdd): Observable<ClasseAdd> {
    return this.http.put<Classe>(`${this.url}/${id}`, classe);
  }

  deleteClasse(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
