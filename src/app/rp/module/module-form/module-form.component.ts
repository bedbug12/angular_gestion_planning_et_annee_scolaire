import { Component, OnInit, ViewChild } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ModuleService } from '../../../services/module.service';
import { ModuleAdd } from '../../../models/module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.css']
})
export class ModuleFormComponent{
  @ViewChild('modForm', { static: false }) modForm!: NgForm;
  module:ModuleAdd={
    libelle:'',
  }
  constructor(private modServ:ModuleService){}
  onSubmit(){
      console.log(this.module)
      this.modServ.addModule(this.module).subscribe()
      this.modForm.resetForm()
  }
}
