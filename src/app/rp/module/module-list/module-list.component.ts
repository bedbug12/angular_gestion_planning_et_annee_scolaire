import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ModuleService } from 'src/app/services/module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules:Module[]=[]
  
  constructor(private moduleService:ModuleService,private router:Router){}
  ngOnInit(): void {
    this.moduleService.getAllModules().subscribe(data=>this.modules=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/module/${id}`)
  }
  onDelete(id:number){
    this.moduleService.deleteModule(id).subscribe(data=>
      this.router.navigateByUrl("/rp/list/modules")
    )
  }
}
