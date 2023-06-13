import { Component } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { Module } from 'src/app/models/module';
import { SessionCours } from 'src/app/models/session-cours';
import { CoursListComponent } from 'src/app/rp/cours/cours-list/cours-list.component';
import { CoursService } from 'src/app/services/cours.service';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { SessionCoursService } from 'src/app/services/session-cours.service';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent {
  sessions:SessionCours[]=[]
  currentDate: Date = new Date();
  futureDate: Date = new Date(this.currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));
  selectedDateD: string=`${this.currentDate.getFullYear()}-${this.currentDate.getMonth()+1}-${this.currentDate.getDate()}`;
  selectedDateF: string=`${this.futureDate.getFullYear()}-${this.futureDate.getMonth()+1}-${this.futureDate.getDate()}`;
  selectedModule!:Cours
  modules!:Cours[]

  constructor(private sessServ:SessionCoursService,private coursServ:CoursService){}

  ngOnInit(): void {
    console.log(this.currentDate,this.selectedDateD,this.selectedDateF)
    this.coursServ.getProfCours(6).subscribe(data=>this.modules=data)
    this.sessServ.getProfSessionsByPeriod(6,this.selectedDateD,this.selectedDateF).subscribe(data=>this.sessions=data) 
  }
  onDateChange(){
    this.sessServ.getProfSessionsByPeriod(6,this.selectedDateD,this.selectedDateF).subscribe(data=>this.sessions=data)
  }
  onModuleChange(){
    this.sessServ.getProfSessionsByModule(6,this.selectedModule.id,this.selectedDateD,this.selectedDateF).subscribe(data=>this.sessions=data)
  }
}
