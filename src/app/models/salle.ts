import { Cours } from "./cours";

export interface Salle{
    id:number,
    nom:string,
    numero:string,
    nbPlace:number,
    sessionCours:Cours[]
 }


export interface SalleAdd{
    nom:string,
    numero:string,
    nbPlace:number,
 }