import { Component, OnInit, ViewChild } from '@angular/core';
import { Classe } from 'src/app/models/classe';
import { EtudiantAdd } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ClasseService } from 'src/app/services/classe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent implements OnInit {
  @ViewChild('etuForm', { static: false }) etuForm!: NgForm;
  classes!:Classe[]
  selectedClasse!:Classe
  etudiant:EtudiantAdd={
    prenom:'',
    nom:'',
    login:'',
    password:'',
  }
  constructor(private etuServ:EtudiantService,private clServ:ClasseService){}
  ngOnInit(): void {
    this.clServ.getAllClasses().subscribe(data=>this.classes=data)
  }
  onSubmit(){
      this.etudiant.classe=this.selectedClasse
      console.log(this.etudiant)
      this.etuServ.addEtudiant(this.etudiant).subscribe()
      this.etuForm.resetForm()
  }
}
