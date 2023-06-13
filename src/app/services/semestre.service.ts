import { Injectable } from '@angular/core';
import { Semestre, SemestreAdd } from '../models/semestre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  semestres:Semestre[]=[]
  url=`${environment.API_URL}/semestres`
  constructor(private http:HttpClient) { }

  getAllSemestres():Observable<Semestre[]>  {
    return this.http.get<Semestre[]>(`${this.url}`)
    // for (let index = 1; index < 7; index++) {
    //   this.semestres.push({
    //     libelle:`Semestre ${index}`
    //   })
    // }
    // return this.semestres
  }

  addSemestre(semestre:SemestreAdd):Observable<SemestreAdd>{
    return this.http.post<SemestreAdd>(`${this.url}`,semestre)
  }

  getSemestreId(id:number):Observable<Semestre>{
    return this.http.get<Semestre>(`${this.url}/${id}`)
  }
  
  updateSemestre(id: number, cours: SemestreAdd): Observable<SemestreAdd> {
    return this.http.put<SemestreAdd>(`${this.url}/${id}`, cours);
  }
  
  deleteSemestre(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }


}
