import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/models/cours';
import { Professeur, ProfesseurAdd } from 'src/app/models/professeur';
import { CoursService } from 'src/app/services/cours.service';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-professeur-update',
  templateUrl: './professeur-update.component.html',
  styleUrls: ['./professeur-update.component.css']
})
export class ProfesseurUpdateComponent {
  @ViewChild('profForm', { static: false }) profForm!: NgForm;
  id!:number
  profUpdate!:Professeur
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
  constructor(private profServ:ProfesseurService, private coursServ:CoursService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getProfesseur(this.id)
    console.log(this.profUpdate,this.id);
    this.coursServ.getAllCours().subscribe(data=>this.cours=data)
  }
  onSubmit(){
      this.professeur.cours=this.selectedCours
      console.log(this.professeur)
      this.profServ.updateProfesseur(this.id,this.professeur).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/professeurs']);
        }
      )
     
  }

getProfesseur(id: number): void {
  this.profServ.getProfesseurById(id).subscribe(
    data => {
      this.profUpdate = data;
      this.selectedCours=this.profUpdate.cours
      this.professeur.prenom=this.profUpdate.prenom
      this.professeur.nom=this.profUpdate.nom
      this.professeur.email=this.profUpdate.email
      this.professeur.password=this.profUpdate.password
      this.professeur.specialite=this.profUpdate.specialite
      this.professeur.grade=this.profUpdate.grade
    },
    error => {
      console.log(error);
    }
  )
  }
}
