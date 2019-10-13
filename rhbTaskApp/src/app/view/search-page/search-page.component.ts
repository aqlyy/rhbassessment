import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GitHubEnqModel } from 'src/app/modal/GitHubEnqRespModal';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '0' }),
        animate('.5s ease-in', style({ opacity: '0' })),
      ])
    ]),
  ],
})
export class SearchPageComponent implements OnInit {

  searchText: string = "";
  searchResults: Array<GitHubEnqModel> = new Array<GitHubEnqModel>();
  page: number = 1;
  maxPage: number;
  itemsPerPage: number = 10;
  isSearchOn: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

  submitForm() {
    this.httpService.getGitHubEnquiry(this.page, this.searchText, this.itemsPerPage).subscribe((resp) => {
      this.isSearchOn = true;
      this.searchResults = resp.items;
      this.maxPage = resp.total_count;
    }, (error) => {
      if (error.statusText && error.statusText.includes("Unknown")) {
        alert("Unexpected error. Please check your connection.");
        return;
      }
    });
  }

  openUrl(url: string) {
    window.open(url, "_blank");
  }

  changePage(e: any) {
    this.page = e;
    console.log(this.page);
    this.httpService.getGitHubEnquiry(this.page, this.searchText, this.itemsPerPage).subscribe((resp) => {
      this.isSearchOn = true;
      this.searchResults = resp.items;
      this.maxPage = resp.total_count;
    }, (error) => {
      if (error.statusText && error.statusText.includes("Unknown")) {
        alert("Unexpected error. Please check your connection.");
        return;
      }
    });
  }

}
