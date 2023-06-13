import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe, ClasseAdd } from 'src/app/models/classe';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-classe-update',
  templateUrl: './classe-update.component.html',
  styleUrls: ['./classe-update.component.css']
})
export class ClasseUpdateComponent implements OnInit{


  classeUpdate!:Classe
  id!:number
  selectedNiveau:string=''
  niveaux:string[]=[ 'L1' , 'L2' , 'L3' ]
  classe:ClasseAdd={
    libelle:'',
    filiere:'',
    niveau:'',
  }

  constructor(private clServ:ClasseService,
    private anneeScolaireService:AnneeScolaireService,
    private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id']
    this.getClasse(this.id)
    console.log(this.classeUpdate,this.id);
  }

  getClasse(id: number): void {
    this.clServ.getClasseById(id).subscribe(
      data => {
        this.classeUpdate = data;
        this.classe.filiere=this.classeUpdate.filiere
        this.classe.libelle=this.classeUpdate.libelle
        this.selectedNiveau=this.classeUpdate.niveau
      },
      error => {
        console.log(error);
      }
    )
    }

  onSubmit(){
      this.classe.niveau=this.selectedNiveau
      this.classe.libelle=this.selectedNiveau+this.classe.filiere
      console.log(this.classe)
      this.clServ.updateClasse(this.id,this.classe).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/classes']);
        }
      )

  }

}
