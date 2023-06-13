import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SessionCours, SessionCoursAdd } from '../models/session-cours';
import { Module } from '../models/module';

@Injectable({
  providedIn: 'root'
})
export class SessionCoursService {
  sessionCours:SessionCours[]=[]
  url=`${environment.API_URL}/sessions-cours`

  constructor(private http:HttpClient) { }
  getAllSessions():Observable<SessionCours[]>{
    return this.http.get<SessionCours[]>(`${this.url}`)
  }
  addSessionCours(sessions:SessionCoursAdd):Observable<SessionCoursAdd>{
    return this.http.post<SessionCoursAdd>(`${this.url}`,sessions)
  }
  getProfesseurSessions(id:Number):Observable<SessionCours[]>{
    return this.http.get<SessionCours[]>(`${this.url}/professeur/${id}`)
  }
  getProfSessionsByModule(id:Number,idM:number,dateD:string,dateF:string):Observable<SessionCours[]>{
    return this.http.get<SessionCours[]>(`${this.url}/professeur/${id}/${idM}/${dateD}/${dateF}`)
  }
  getProfSessionsByPeriod(id:Number,dateD:string,dateF:string):Observable<SessionCours[]>{
    return this.http.get<SessionCours[]>(`${this.url}/professeur/${id}/${dateD}/${dateF}`)
  }

  getSessionId(id:number):Observable<SessionCours>{
    return this.http.get<SessionCours>(`${this.url}/${id}`)
  }
  
  updateSession(id: number, cours: SessionCoursAdd): Observable<SessionCoursAdd> {
    return this.http.put<SessionCoursAdd>(`${this.url}/${id}`, cours);
  }
  
  deleteSession(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
