import { Component, ViewChild, OnInit } from '@angular/core';
import { Classe, ClasseAdd } from 'src/app/models/classe';
import { ClasseService } from '../../../services/classe.service';
import { AnneeScolaireService } from '../../../services/annee-scolaire.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent {
  @ViewChild('classForm', { static: false }) classForm!: NgForm;
  selectedNiveau:string=''
  niveaux:string[]=[ 'L1' , 'L2' , 'L3' ]
  classe:ClasseAdd={
    libelle:'',
    filiere:'',
    niveau:'',
  }
  constructor(private clServ:ClasseService,private anneeScolaireService:AnneeScolaireService,private route:ActivatedRoute){}
  onSubmit(){
      this.classe.niveau=this.selectedNiveau
      this.classe.libelle=this.selectedNiveau+this.classe.filiere
      this.anneeScolaireService.getAllAnneeScolaire().subscribe(data=>this.classe.anneeScolaire=data[data.length - 1])
      console.log(this.classe)
      this.clServ.addClasse(this.classe).subscribe()
      this.classForm.resetForm()
  }
}
