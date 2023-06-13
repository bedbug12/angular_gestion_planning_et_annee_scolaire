import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle, SalleAdd } from 'src/app/models/salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salle-update',
  templateUrl: './salle-update.component.html',
  styleUrls: ['./salle-update.component.css']
})
export class SalleUpdateComponent {
  @ViewChild('salleForm', { static: false }) salleForm!: NgForm;
  id!:number
  salleUpdate!:Salle
  place:string=''
  salle:SalleAdd={
    nom:'',
    numero:'',
    nbPlace:0,
  }
  constructor(private salServ:SalleService,private route:ActivatedRoute,private router:Router){}
  onSubmit(){
      this.salle.nbPlace=Number(this.place)
      console.log(this.salle)
      this.salServ.updateSalle(this.id,this.salle).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/salles']);
        }
      )
     

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getSalle(this.id)
  }
  getSalle(id: number): void {
    this.salServ.getSalleId(id).subscribe(
      data => {
        this.salleUpdate = data;
        this.salle.nom=this.salleUpdate.nom
        this.salle.numero=this.salleUpdate.numero
        this.salle.nbPlace=this.salleUpdate.nbPlace
      },
      error => {
        console.log(error);
      }
    )
  }
 
}
