import { Classe } from "./classe";
import { Module } from "./module";
import { Professeur } from "./professeur";
import { Semestre } from "./semestre";
import { SessionCours } from "./session-cours";

export interface Cours{
    id:number,
    module:Module,
    classe:Classe,
    semestre:Semestre,
    heure:number,
    ecoule:number,
    professeur:Professeur,
    sessionCours:SessionCours[]
}

export interface CoursAdd{
    heure:number,
    ecoule:number,
    module?:Module,
    semestre?:Semestre,
    classe?:Classe,
}
