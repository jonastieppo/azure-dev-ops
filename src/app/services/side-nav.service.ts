import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SideNavLinks } from '../models/sidenavlinks';


@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor(private http : HttpClient) { }


  private baseUrl = 'http://localhost:9000/api/'


  getAllLinks () : Observable<SideNavLinks>{
    return this.http.get<SideNavLinks>(this.baseUrl+'sidenavlinks')
  }
}
