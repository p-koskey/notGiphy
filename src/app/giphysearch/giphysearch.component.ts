import { Component, OnInit } from '@angular/core';
import { GifrequestService } from '../gifrequest.service';

@Component({
  selector: 'app-giphysearch',
  templateUrl: './giphysearch.component.html',
  styleUrls: ['./giphysearch.component.css'],
})
export class GiphysearchComponent implements OnInit {
  constructor(private gifRequestService: GifrequestService) {}

  ngOnInit(): void {}

  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.gifRequestService
        .searchGif(searchTerm);
    }
  }
}
