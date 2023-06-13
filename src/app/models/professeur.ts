import { Cours } from "./cours"

 export interface Professeur{
    id:number
    prenom:string,
    nom:string,
    email:string,
    password:string,
    specialite:string,
    grade:string,
    cours:Cours[]
 }

 export interface ProfesseurAdd{
    prenom:string,
    nom:string,
    email:string,
    password:string,
    specialite:string,
    grade:string,
    cours?:Cours[]
 }