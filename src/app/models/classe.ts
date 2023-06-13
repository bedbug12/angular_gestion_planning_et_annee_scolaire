import { AnneeScolaire } from './annee-scolaire';
import { Cours } from './cours';
import { Etudiant } from './etudiant';
export interface Classe{
    id:number,
    libelle:string,
    filiere:string,
    niveau:string,
    anneeScolaire?:AnneeScolaire,
    cours:Cours[],
    etudiants:Etudiant[],
}

export interface ClasseAdd{
    libelle:string,
    filiere:string,
    niveau:string,
    anneeScolaire?:AnneeScolaire,
}