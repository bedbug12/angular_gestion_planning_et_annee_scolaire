import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionCours } from 'src/app/models/session-cours';
import { SessionCoursService } from 'src/app/services/session-cours.service';

@Component({
  selector: 'app-session-cours-list',
  templateUrl: './session-cours-list.component.html',
  styleUrls: ['./session-cours-list.component.css']
})
export class SessionCoursListComponent implements OnInit {
  sessions:SessionCours[]=[]

  constructor(private sessServ:SessionCoursService,private router:Router){}

  ngOnInit(): void {
    this.sessServ.getAllSessions().subscribe(data=>this.sessions=data)
  }
  onUpdate(id:number){
    this.router.navigateByUrl(`/rp/update/session-cours/${id}`)
  }
  onDelete(id:number){
    this.sessServ.deleteSession(id).subscribe(data=>
      this.router.navigateByUrl("/rp/list/sessions-cours")
    )
  }
}
