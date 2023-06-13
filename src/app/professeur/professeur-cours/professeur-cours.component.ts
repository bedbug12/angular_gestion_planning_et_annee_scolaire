import { Component } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-professeur-cours',
  templateUrl: './professeur-cours.component.html',
  styleUrls: ['./professeur-cours.component.css']
})
export class ProfesseurCoursComponent {
  cours:Cours[]=[]
  constructor(private coursService:CoursService){}
  
  ngOnInit(): void {
    this.coursService.getProfCours(5).subscribe(data=>this.cours=data)
  }

}
