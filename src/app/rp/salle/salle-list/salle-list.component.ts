import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/models/salle';
import { SalleService } from '../../../services/salle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salle-list',
  templateUrl: './salle-list.component.html',
  styleUrls: ['./salle-list.component.css']
})
export class SalleListComponent implements OnInit {
  salles:Salle[]=[]

  constructor(private salleService:SalleService,private router:Router){}
  ngOnInit(): void {
    this.salleService.getAllSalles().subscribe(data=>this.salles=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/salle/${id}`)
  }
  onDelete(id:number){
    this.salleService.deleteSalle(id).subscribe()
  }
  
}
