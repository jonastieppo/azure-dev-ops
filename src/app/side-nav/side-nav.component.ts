import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SideNavLinks } from '../models/sidenavlinks';
import { SideNavService } from '../services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})




export class SideNavComponent {
  
  sideNavLinks$!: Observable<SideNavLinks>;

  constructor(private sideNavService : SideNavService){
    
  }

  ngOnInit(){ 

    this.sideNavLinks$ = this.sideNavService.getAllLinks()
  }

}
