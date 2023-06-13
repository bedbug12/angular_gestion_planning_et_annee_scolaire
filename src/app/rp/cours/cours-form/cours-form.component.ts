import { Component, OnInit, ViewChild } from '@angular/core';
import { Classe } from 'src/app/models/classe';
import { Cours, CoursAdd } from 'src/app/models/cours';
import { Module } from 'src/app/models/module';
import { Semestre } from 'src/app/models/semestre';
import { CoursService } from 'src/app/services/cours.service';
import { SemestreService } from '../../../services/semestre.service';
import { ModuleService } from '../../../services/module.service';
import { ClasseService } from '../../../services/classe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cours-form',
  templateUrl: './cours-form.component.html',
  styleUrls: ['./cours-form.component.css']
})
export class CoursFormComponent implements OnInit{
  @ViewChild('coursForm', { static: false }) coursForm!: NgForm;
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
    private classeService:ClasseService){}

  ngOnInit(): void {
      this.semestreService.getAllSemestres().subscribe(data=>this.semestres=data)
      this.moduleService.getAllModules().subscribe(data=>this.modules=data)
      this.classeService.getAllClasses().subscribe(data=>this.classes=data)
  }

  onSelectModule(option: Module) {
    this.selectedModule = option;
    console.log(this.selectedModule)
  }
  onSelectSemestre(option: Semestre) {
    this.selectedSemestre = option;
  }
  onSelectClasse(option: Classe) {
    console.log(this.selectedClasse);
  }


  onSubmit(){
      //this.cours.classes=this.selectedClasse
      this.cours.module=this.selectedModule
      this.cours.semestre=this.selectedSemestre
      this.cours.heure=Number(this.selectedHeure)
      this.cours.classe=this.selectedClasse
      console.log(this.cours)
      console.log(this.cours.module)
      console.log(this.cours.module.libelle)
      console.log(this.selectedModule)
      this.courServ.addCours(this.cours).subscribe()
      this.coursForm.resetForm()
  }
}
