import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit{
  classes:Classe[]=[]

  constructor(private clService:ClasseService,private router:Router){}
  ngOnInit(): void {
    this.clService.getAllClasses().subscribe(data=>this.classes=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/classe/${id}`)
  }
  onDelete(id:number){
    this.clService.deleteClasse(id).subscribe(data=>
      this.router.navigateByUrl("/rp/list/classes")
    )
  }
}
