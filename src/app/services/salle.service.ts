import { Injectable } from '@angular/core';
import { Salle, SalleAdd } from '../models/salle';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  salles:Salle[]=[]
  url=`${environment.API_URL}/salles`
  constructor(private http:HttpClient) { }

  getAllSalles():Observable<Salle[]>{
    return this.http.get<Salle[]>(`${this.url}`)
    // for (let index = 1; index < 4; index++) {
    //   this.salles.push({
    //     id:index,
    //     libelle:`20${index}`,
    //     numero:Number(`20${index}`),
    //     nbPlace:index*10,
    //     img:'https://upload.wikimedia.org/wikipedia/commons/f/fb/Orbe_-_Chantemerle_-_salle_de_classe_1.jpg'
    //   })
    // }
    // return this.salles
  }

  addSalle(salle:SalleAdd):Observable<SalleAdd>{
    return this.http.post<SalleAdd>(`${this.url}`,salle)
  }

  getSalleId(id:number):Observable<Salle>{
    return this.http.get<Salle>(`${this.url}/${id}`)
  }
  
  updateSalle(id: number, cours: SalleAdd): Observable<SalleAdd> {
    return this.http.put<SalleAdd>(`${this.url}/${id}`, cours);
  }
  
  deleteSalle(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
