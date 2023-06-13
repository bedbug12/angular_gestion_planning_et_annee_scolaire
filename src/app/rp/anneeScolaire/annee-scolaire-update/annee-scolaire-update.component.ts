import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneeScolaire, AnneeScolaireAdd } from 'src/app/models/annee-scolaire';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';

@Component({
  selector: 'app-annee-scolaire-update',
  templateUrl: './annee-scolaire-update.component.html',
  styleUrls: ['./annee-scolaire-update.component.css']
})
export class AnneeScolaireUpdateComponent {

  
  id!:number;
  anneeUpdate!:AnneeScolaire
  annee:AnneeScolaireAdd={
    anneeScolaire:'',
  }
  constructor(private anneeScolaireService:AnneeScolaireService,private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id']
    this.getAnnee(this.id)
    console.log(this.anneeUpdate,this.id);
    
  }

  getAnnee(id: number): void {
    this.anneeScolaireService.getAnneeScolaireById(id).subscribe(
      data => {
        this.anneeUpdate = data;
        this.annee.anneeScolaire=this.anneeUpdate.libelle
      },
      error => {
        console.log(error);
      }
    )
    }


  onSubmit(){
      this.anneeScolaireService.updateAnneeScolaire(this.id,this.annee).subscribe(
        data => {
          console.log(this.annee.anneeScolaire)
          console.log(data);
          this.router.navigate(['rp/list/annees-scolaires']);
        }
      )
      
  }
}
