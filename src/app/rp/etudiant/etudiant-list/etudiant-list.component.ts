import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent {
  etudiant:Etudiant[]=[]
  
  constructor(private etuServ:EtudiantService,private router:Router){}
  
  ngOnInit(): void {
    this.etuServ.getAllEtudiant().subscribe(data=>this.etudiant=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/etudiant/${id}`)
  }
  onDelete(id:number){
    this.etuServ.deleteEtudiant(id).subscribe(data=>
      this.router.navigateByUrl("/rp/list/etudiants")
    )
  }
}
