import { Absence } from "./absence";
import { Classe } from "./classe";

export interface Etudiant{
    id:number,
    prenom:string,
    nom:string,
    email:string,
    password:string,
    classe:Classe
    absence:Absence[],
}

export interface EtudiantAdd{
    prenom:string,
    nom:string,
    login:string,
    password:string,
    classe?:Classe
}