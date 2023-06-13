import { Component, OnInit } from '@angular/core';
import { Semestre } from '../../../models/semestre';
import { SemestreService } from '../../../services/semestre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semestre-list',
  templateUrl: './semestre-list.component.html',
  styleUrls: ['./semestre-list.component.css']
})
export class SemestreListComponent implements OnInit{
  semestres:Semestre[]=[]

  constructor(private semestreService:SemestreService,private router:Router){}

  ngOnInit(): void {
    this.semestreService.getAllSemestres().subscribe(data=>this.semestres=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/semestre/${id}`)
  }
  onDelete(id:number){
    this.semestreService.deleteSemestre(id).subscribe()
  }
}
