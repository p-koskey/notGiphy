import { Component, OnInit, OnDestroy } from '@angular/core';
import {GifrequestService} from '../gifrequest.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs:any[]=[];
  subscription : Subscription;
  constructor(private gifRequestService:GifrequestService ) { }

  ngOnInit(): void {
    
    this.gifRequestService.getTrending();
    this.subscription = this.gifRequestService.getGifs()
    .subscribe((response:any)=>{
      this.gifs =response;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 
}
