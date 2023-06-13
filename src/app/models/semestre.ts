import { Cours } from "./cours";

export interface Semestre{
    id:number,
    libelle:string,
    cours:Cours[]
}

export interface SemestreAdd{
    libelle:string,
}