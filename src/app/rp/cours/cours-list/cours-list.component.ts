import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from '../../../services/cours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit{
  cours:Cours[]=[]
  constructor(private coursService:CoursService,private router:Router){}
  ngOnInit(): void {
    this.coursService.getAllCours().subscribe(data=>this.cours=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/cours/${id}`)
  }
  onDelete(id:number){
    this.coursService.deleteCours(id).subscribe(data=>
      this.router.navigateByUrl("/rp/list/cours")
    )
  }

}
