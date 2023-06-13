import { Classe } from "./classe";

export interface AnneeScolaire{
    id:number,
    libelle:string,
    classes:Classe[]
}

export interface AnneeScolaireAdd{
    anneeScolaire:string,
}