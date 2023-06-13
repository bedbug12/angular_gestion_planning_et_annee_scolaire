import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/models/cours';
import { Salle } from 'src/app/models/salle';
import { SessionCoursAdd, EtatSessionCours, SessionCours } from 'src/app/models/session-cours';
import { CoursService } from 'src/app/services/cours.service';
import { SalleService } from 'src/app/services/salle.service';
import { SessionCoursService } from 'src/app/services/session-cours.service';

@Component({
  selector: 'app-session-cours-update',
  templateUrl: './session-cours-update.component.html',
  styleUrls: ['./session-cours-update.component.css']
})
export class SessionCoursUpdateComponent {
  id!:number
  sessionUpdate!:SessionCours
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


  constructor(private sessServ:SessionCoursService,private coursServ:CoursService,private salServ:SalleService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.coursServ.getAllCours().subscribe(data=>this.cours=data)
    this.salServ.getAllSalles().subscribe(data=>this.salle=data)
    this.id = this.route.snapshot.params['id']
    this.getSession(this.id)
    console.log(this.sessionUpdate,this.id);
    
  }
  onSubmit(){
    // console.log(this.selectedTimeD)
    // console.log(this.selectedTimeF)
    // console.log(this.selectedDate)
      const [hourD, minuteD] = String(this.selectedTimeD).split(':');
      const [hourF, minuteF] = String(this.selectedTimeF).split(':');
      this.sessions.cours=this.selectedCours
      this.sessions.date=this.selectedDate
      this.sessions.salle=this.selectedSalle
      this.sessions.heureDebut=this.selectedTimeD
      this.sessions.heureFin=this.selectedTimeF
      this.sessions.heure=(Number(hourF)-Number(hourD))
      console.log(this.sessions)
      this.sessServ.updateSession(this.id,this.sessions).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/sessions-cours']);
        }
      )
  }

  getSession(id: number): void {
    this.sessServ.getSessionId(id).subscribe(
      data => {
        this.sessionUpdate = data;
        this.selectedCours=this.sessionUpdate.cours
        this.selectedDate=this.sessionUpdate.date
        this.selectedSalle=this.sessionUpdate.salle
        this.selectedTimeD=this.sessionUpdate.heureDebut
        this.selectedTimeF=this.sessionUpdate.heureFin
        this.sessions.enLigne=this.sessionUpdate.isOnLine
        console.log(data);
        console.log(this.sessionUpdate);
        console.log(this.selectedCours);
        console.log(this.selectedSalle);

      },
      error => {
        console.log(error);
      }
    )
  }

}
