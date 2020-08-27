import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from '../environments/environment'
import { BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GifrequestService {

  gifs = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) { }

  getTrending(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${environment.apikey}&limit=50`)
    .subscribe((response:any) =>{
      this.gifs.next(response.data);
    });
  }
  
  searchGif(gifName){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apikey}&limit=50`)
    .subscribe((response:any) =>{
      this.gifs.next(response.data);
    });
  }

  getGifs(){
    return this.gifs.asObservable();
  }

}
