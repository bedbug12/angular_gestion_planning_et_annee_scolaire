import { Injectable } from '@angular/core';
import { Module, ModuleAdd } from '../models/module';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  modules:Module[]=[]
  private url =`${environment.API_URL}/modules`
  constructor(private http:HttpClient) { }

  getAllModules(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.url}`);
    // for (let index = 1; index < 4; index++) {
    //   this.modules.push({
    //     id:index,
    //     libelle:`Java`,
    //   })
    // }
    // return this.modules
}

addModule(module:ModuleAdd):Observable<ModuleAdd>{
  return this.http.post<ModuleAdd>(`${this.url}`,module)
}

  
getModuleById(id:number):Observable<Module>{
  return this.http.get<Module>(`${this.url}/${id}`)
}

updateModule(id: number, cours: ModuleAdd): Observable<ModuleAdd> {
  return this.http.put<ModuleAdd>(`${this.url}/${id}`, cours);
}

deleteModule(id: number): Observable<any> {
  return this.http.delete(`${this.url}/${id}`);
}

}
