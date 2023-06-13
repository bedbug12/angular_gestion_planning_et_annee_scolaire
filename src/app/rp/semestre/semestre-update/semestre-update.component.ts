import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Semestre, SemestreAdd } from 'src/app/models/semestre';
import { SemestreService } from 'src/app/services/semestre.service';

@Component({
  selector: 'app-semestre-update',
  templateUrl: './semestre-update.component.html',
  styleUrls: ['./semestre-update.component.css']
})
export class SemestreUpdateComponent {
  id!:number
  semestreUpdate!:Semestre
  semestre:SemestreAdd={
    libelle:'',
  }

  constructor(private semServ:SemestreService,private route:ActivatedRoute,private router:Router){}
  onSubmit(){
      console.log(this.semestre)
      this.semServ.updateSemestre(this.id,this.semestre).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/semestres']);
        }
      )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getSemestre(this.id)
  }
  getSemestre(id: number): void {
    this.semServ.getSemestreId(id).subscribe(
      data => {
        this.semestreUpdate = data;
        this.semestre.libelle=this.semestreUpdate.libelle
      },
      error => {
        console.log(error);
      }
    )
  }
}
