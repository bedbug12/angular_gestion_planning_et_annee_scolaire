import { Etudiant } from "./etudiant";
import { SessionCours } from "./session-cours";

export interface Absence{
    id:number;
    date:Date;
    heure:number;
    justifiee:boolean;
    motifs:string;
    etudiant:Etudiant;
    sessionCours:SessionCours;
}