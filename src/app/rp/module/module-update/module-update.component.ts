import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, ModuleAdd } from 'src/app/models/module';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module-update',
  templateUrl: './module-update.component.html',
  styleUrls: ['./module-update.component.css']
})
export class ModuleUpdateComponent {

  @ViewChild('modForm', { static: false }) modForm!: NgForm;
  id!:number
  moduleUpdate!:Module
  module:ModuleAdd={
    libelle:'',
  }
  constructor(private modServ:ModuleService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getModule(this.id)
  }
  getModule(id: number): void {
    this.modServ.getModuleById(id).subscribe(
      data => {
        this.moduleUpdate = data;
        this.module.libelle=this.moduleUpdate.libelle
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit(){
      console.log(this.module)
      this.modServ.updateModule(this.id,this.module).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['rp/list/modules']);
        }
      )
      
  }  
}
