import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { Salle } from 'src/app/models/salle';
import { EtatSessionCours, SessionCoursAdd } from 'src/app/models/session-cours';
import { CoursService } from 'src/app/services/cours.service';
import { SalleService } from 'src/app/services/salle.service';
import { SessionCoursService } from 'src/app/services/session-cours.service';

@Component({
  selector: 'app-session-cours-form',
  templateUrl: './session-cours-form.component.html',
  styleUrls: ['./session-cours-form.component.css']
})
export class SessionCoursFormComponent implements OnInit {
  selectedCours!:Cours;
  selectedSalle!:Salle;
  selectedDate!:Date;
  selectedTimeD:Date=new Date;
  selectedTimeF:Date=new Date;

  cours!:Cours[]
  salle!:Salle[]
  sessions:SessionCoursAdd={
    date:new Date,
    heureDebut:new Date,
    heureFin:new Date,
    heure:0,
    enLigne:false,
    etat:EtatSessionCours.ENCOURS
  }


  constructor(private sessServ:SessionCoursService,private coursServ:CoursService,private salServ:SalleService){}
  ngOnInit(): void {
    this.coursServ.getAllCours().subscribe(data=>this.cours=data)
    this.salServ.getAllSalles().subscribe(data=>this.salle=data)
    
  }
  onSubmit(){
    // console.log(this.selectedTimeD)
    // console.log(this.selectedTimeF)
    // console.log(this.selectedDate)
      const [hourD, minuteD] = String(this.selectedTimeD).split(':');
      const [hourF, minuteF] = String(this.selectedTimeF).split(':');
      this.sessions.cours=this.selectedCours
      this.sessions.date=this.selectedDate
      this.sessions.heureDebut=this.selectedTimeD
      this.sessions.heureFin=this.selectedTimeF
      this.sessions.salle=this.selectedSalle
      this.sessions.heure=(Number(hourF)-Number(hourD))
      console.log(this.sessions)
      this.sessServ.addSessionCours(this.sessions).subscribe()
  }
}
