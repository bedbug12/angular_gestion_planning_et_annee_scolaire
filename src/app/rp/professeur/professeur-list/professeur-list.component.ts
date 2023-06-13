import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/models/professeur';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-professeur-list',
  templateUrl: './professeur-list.component.html',
  styleUrls: ['./professeur-list.component.css']
})
export class ProfesseurListComponent {
  professeur:Professeur[]=[]
  
  constructor(private profServ:ProfesseurService,private router:Router){}
  
  ngOnInit(): void {
    this.profServ.getAllProfesseur().subscribe(data=>this.professeur=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/professeur/${id}`)
  }
  onDelete(id:number){
    this.profServ.deleteProfesseur(id).subscribe()
  }
}
