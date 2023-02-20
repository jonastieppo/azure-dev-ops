import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { acessedLinks } from '../../db-data'
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-azure-header',
  templateUrl: './azure-header.component.html',
  styleUrls: ['./azure-header.component.css']
})
export class AzureHeaderComponent {
  
  links = ['Main','Project2020','Boards','Boards']
  linksSeach = acessedLinks
  searchClicked : boolean = false
  images = ['chart-vertical-svgrepo-com','shop-bag-svgrepo-com','question-circle-svgrepo-com','profile-circle-svgrepo-com']

  searchFocus = new Subject()

  @ViewChild('searchRef') 
  searchElement! : ElementRef<HTMLInputElement>; 

  constructor(){}
  
  ngOninit() {
    
  
  }

  ngAfterViewInit(){

  }


  
  //Altera a visibilidade dos links, e expande o search
  onSearchFocused() {
  
    //Altera texto do place holder
    this.searchElement.nativeElement.setAttribute('placeholder','Type / for a list of filters')


    //Altera a visibilidade dos links
    this.searchClicked = true;

    //Alterando a visibilidade caso o usuário clique fora do search
    const userClick = fromEvent(document, 'click').subscribe(()=>{

      if(document.activeElement != this.searchElement.nativeElement){
        this.searchElement.nativeElement.setAttribute('placeholder','Search')
        this.searchClicked = false;
        userClick.unsubscribe();
      }

    })
    

  }

}
