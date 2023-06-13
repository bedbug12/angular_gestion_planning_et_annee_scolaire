import { Injectable, OnInit } from '@angular/core';
import { Cours, CoursAdd } from '../models/cours';
import { ModuleService } from './module.service';
import { ClasseService } from './classe.service';
import { SemestreService } from './semestre.service';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  cours:Cours[]=[]
  private url=`${environment.API_URL}/cours`

  constructor(private http:HttpClient){}

  getAllCours():Observable<Cours[]>{
    return this.http.get<Cours[]>(`${this.url}`)
    // for (let index = 1; index < 4; index++) {
    //   console.log(this.classeService.getClasseById(5))
    //   this.module=this.moduleService.getModuleById(5).libelle as string
    //   this.classe=this.classeService.getClasseById(5).filiere as string
    //   this.cours.push({
    //     id:index,
    //     module:this.module,
    //     classe:this.classe,
    //     heure:24,
    //     ecoule:0,
    //     semestre:this.semestreService.getSemestreById(`Semestre ${7}`).libelle

    //   })
      
    // }
    // return this.cours
  }
  

  addCours(cours:CoursAdd):Observable<CoursAdd>{
    return this.http.post<CoursAdd>(`${this.url}`,cours)
  }

  getProfCours(id:number):Observable<Cours[]>{
    return this.http.get<Cours[]>(`${this.url}/professeur/${id}`)
  }

  getCoursById(id:number):Observable<Cours>{
    return this.http.get<Cours>(`${this.url}/${id}`)
  }

  updateCours(id: number, cours: CoursAdd): Observable<CoursAdd> {
    return this.http.put<CoursAdd>(`${this.url}/${id}`, cours);
  }

  deleteCours(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  
}
