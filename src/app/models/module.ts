import { Cours } from "./cours";

export interface Module{
    id:number,
    libelle:string,
    cours:Cours[]
}

export interface ModuleAdd{
    libelle:string,
}