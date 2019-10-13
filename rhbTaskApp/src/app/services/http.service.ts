import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, merge, fromEvent, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { GitHubEnqRespModel } from '../modal/GitHubEnqRespModal';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = "https://api.github.com/search/repositories?";

  constructor(@Inject(forwardRef(() => HttpClient)) public http: HttpClient) { }

  private get(url: string): Observable<any> {
    return this.http.get(url).pipe();
  }

  public getGitHubEnquiry(page: number, searchText: string, itemPerPage: number): Observable<GitHubEnqRespModel> {
    let url = this.baseUrl + "per_page=" + itemPerPage;
    if(page) {
      url = url + "&page=" + page;
    }
    url = url + "&amp;q=" + encodeURIComponent(searchText);
    return this.get(url);
  }
}
