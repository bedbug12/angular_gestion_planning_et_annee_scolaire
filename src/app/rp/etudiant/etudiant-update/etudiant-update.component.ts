import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { Etudiant, EtudiantAdd } from 'src/app/models/etudiant';
import { ClasseService } from 'src/app/services/classe.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-update',
  templateUrl: './etudiant-update.component.html',
  styleUrls: ['./etudiant-update.component.css']
})
export class EtudiantUpdateComponent {
  @ViewChild('etuForm', { static: false }) etuForm!: NgForm;
  id!:number
  classes!:Classe[]
  selectedClasse!:Classe
  etudiantUpdate!:Etudiant
  etudiant:EtudiantAdd={
    prenom:'',
    nom:'',
    login:'',
    password:'',
  }
  constructor(private etuServ:EtudiantService,private clServ:ClasseService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getEtudiant(this.id)
    console.log(this.etudiantUpdate,this.id);
    this.clServ.getAllClasses().subscribe(data=>this.classes=data)
  }
  onSubmit(){
      this.etudiant.classe=this.selectedClasse
      this.etuServ.updateEtudiant(this.id,this.etudiant).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/etudiants']);
        }
      )
      
  }

getEtudiant(id: number): void {
  this.etuServ.getEtudiantById(id).subscribe(
    data => {
      this.etudiantUpdate = data;
      this.selectedClasse=this.etudiantUpdate.classe
      this.etudiant.prenom=this.etudiantUpdate.prenom
      this.etudiant.nom=this.etudiantUpdate.nom
      this.etudiant.login=this.etudiantUpdate.email
      this.etudiant.password=this.etudiantUpdate.password
    },
    error => {
      console.log(error);
    }
  )
  }


}
