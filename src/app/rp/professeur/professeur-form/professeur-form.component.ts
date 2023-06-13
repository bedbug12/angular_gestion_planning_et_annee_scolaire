import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cours } from 'src/app/models/cours';
import { ProfesseurAdd } from 'src/app/models/professeur';
import { CoursService } from 'src/app/services/cours.service';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-professeur-form',
  templateUrl: './professeur-form.component.html',
  styleUrls: ['./professeur-form.component.css']
})
export class ProfesseurFormComponent implements OnInit{
  @ViewChild('profForm', { static: false }) profForm!: NgForm;
  cours!:Cours[]
  selectedCours!:Cours[]
  professeur:ProfesseurAdd={
    prenom:'',
    nom:'',
    email:'',
    password:'',
    specialite:'',
    grade:'',
  }
  constructor(private profServ:ProfesseurService, private coursServ:CoursService){}
  ngOnInit(): void {
    this.coursServ.getAllCours().subscribe(data=>this.cours=data)
  }
  onSubmit(){
      this.professeur.cours=this.selectedCours
      console.log(this.professeur)
      this.profServ.addProfesseur(this.professeur).subscribe()
      this.profForm.resetForm()
  }
}
