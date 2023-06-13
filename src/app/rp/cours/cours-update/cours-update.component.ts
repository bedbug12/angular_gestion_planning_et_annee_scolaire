import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { Cours, CoursAdd } from 'src/app/models/cours';
import { Module } from 'src/app/models/module';
import { Semestre } from 'src/app/models/semestre';
import { ClasseService } from 'src/app/services/classe.service';
import { CoursService } from 'src/app/services/cours.service';
import { ModuleService } from 'src/app/services/module.service';
import { SemestreService } from 'src/app/services/semestre.service';

@Component({
  selector: 'app-cours-update',
  templateUrl: './cours-update.component.html',
  styleUrls: ['./cours-update.component.css']
})
export class CoursUpdateComponent {
  @ViewChild('coursForm', { static: false }) coursForm!: NgForm;
  id!:number
  coursUpdate!:Cours
  selectedModule!:Module
  selectedSemestre!:Semestre
  selectedClasse!:Classe
  selectedHeure:string=''
  modules!:Module[]
  semestres!:Semestre[]
  classes!:Classe[]
  heures:string[]=['30','24','20']

  cours:CoursAdd={
    heure:0,
    ecoule:0,
  }

  constructor(private courServ:CoursService,
    private semestreService:SemestreService,
    private moduleService:ModuleService,
    private classeService:ClasseService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
      this.getCours(this.id)
      console.log(this.coursUpdate,this.id);
      this.semestreService.getAllSemestres().subscribe(data=>this.semestres=data)
      this.moduleService.getAllModules().subscribe(data=>this.modules=data)
      this.classeService.getAllClasses().subscribe(data=>this.classes=data)
  }

  onSubmit(){
      //this.cours.classes=this.selectedClasse
      this.cours.module=this.selectedModule
      this.cours.semestre=this.selectedSemestre
      this.cours.heure=Number(this.selectedHeure)
      this.courServ.updateCours(this.id,this.cours).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/cours']);
        }
      )
      
  }

  getCours(id: number): void {
    this.courServ.getCoursById(id).subscribe(
      data => {
        this.coursUpdate = data;
        this.selectedModule=this.coursUpdate.module
        this.selectedSemestre=this.coursUpdate.semestre
        this.selectedHeure=String(this.coursUpdate.heure)
        this.cours.ecoule=this.coursUpdate.ecoule
      },
      error => {
        console.log(error);
      }
    )
    }
}

