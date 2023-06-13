import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalleAdd } from 'src/app/models/salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salle-form',
  templateUrl: './salle-form.component.html',
  styleUrls: ['./salle-form.component.css']
})
export class SalleFormComponent {
  @ViewChild('salleForm', { static: false }) salleForm!: NgForm;
  place:string=''
  salle:SalleAdd={
    nom:'',
    numero:'',
    nbPlace:0,
  }
  constructor(private salServ:SalleService){}
  onSubmit(){
      this.salle.nbPlace=Number(this.place)
      console.log(this.salle)
      this.salServ.addSalle(this.salle).subscribe()
      this.salleForm.resetForm()

  }
}
