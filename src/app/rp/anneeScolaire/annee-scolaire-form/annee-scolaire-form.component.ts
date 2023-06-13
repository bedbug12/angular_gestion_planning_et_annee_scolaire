import { Component, ViewChild } from '@angular/core';
import { AnneeScolaireAdd } from '../../../models/annee-scolaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AnneeScolaireService } from '../../../services/annee-scolaire.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-annee-scolaire-form',
  templateUrl: './annee-scolaire-form.component.html',
  styleUrls: ['./annee-scolaire-form.component.css']
})
export class AnneeScolaireFormComponent {
  @ViewChild('etuForm', { static: false }) etuForm!: NgForm;
  annee:AnneeScolaireAdd={
    anneeScolaire:'',
  }
  constructor(private anneeScolaireService:AnneeScolaireService){}
  onSubmit(){
      this.anneeScolaireService.addAnneeScolaire(this.annee).subscribe()
      this.etuForm.resetForm();
  }
  
}
