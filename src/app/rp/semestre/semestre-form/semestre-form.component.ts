import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SemestreAdd } from 'src/app/models/semestre';
import { SemestreService } from 'src/app/services/semestre.service';

@Component({
  selector: 'app-semestre-form',
  templateUrl: './semestre-form.component.html',
  styleUrls: ['./semestre-form.component.css']
})
export class SemestreFormComponent {
  @ViewChild('semForm', { static: false }) semForm!: NgForm;
  semestre:SemestreAdd={
    libelle:'',
  }

  constructor(private semServ:SemestreService){}
  onSubmit(){
      console.log(this.semestre)
      this.semServ.addSemestre(this.semestre).subscribe()
      this.semForm.resetForm()
  }
}
