import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeScolaire } from 'src/app/models/annee-scolaire';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';

@Component({
  selector: 'app-annee-scolaire-list',
  templateUrl: './annee-scolaire-list.component.html',
  styleUrls: ['./annee-scolaire-list.component.css']
})
export class AnneeScolaireListComponent implements OnInit{
  anneeScolaire:AnneeScolaire[]=[]

  constructor(private anescoServi:AnneeScolaireService,private router:Router){
  }
  
  ngOnInit(): void {
    this.anescoServi.getAllAnneeScolaire().subscribe(data=>this.anneeScolaire=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/annee-scolaire/${id}`)
  }
  onDelete(id:number){
    this.anescoServi.deleteAnneeScolaire(id).subscribe(data=>
      this.router.navigateByUrl("/rp/list/annees-scolaires")
    )
  }

}
