import { Cours } from "./cours";
import { Salle } from "./salle";
import { Absence } from './absence';

export interface SessionCours{
    id:number,
    date:Date,
    cours:Cours,
    heureDebut:Date,
    heureFin:Date,
    salle:Salle,
    isOnLine:boolean,
    etat:string,
    absence:Absence[]

}
export interface SessionCoursAdd{
    date:Date,
    cours?:Cours,
    heureDebut:Date,
    heureFin:Date,
    heure:number,
    salle?:Salle,
    enLigne:boolean,
    etat:EtatSessionCours,

}
export enum EtatSessionCours{
    ENCOURS,TERMINE,INVALIDE,ANNULEE
}