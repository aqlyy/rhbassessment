import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchPageComponent } from './search-page.component';
import { HttpService } from 'src/app/services/http.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CroptextPipe } from 'src/app/pipes/croptext.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent, CroptextPipe],
      providers: [HttpService],
      imports: [HttpClientTestingModule, FormsModule, NgxPaginationModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(':', () => {

    function setup() {
      const httpService = TestBed.get(HttpService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return {httpService, httpTestingController};
    }

    it('should call the GitHub\'s data', () => {
      const {httpService, httpTestingController} = setup();
      const mockGitHubData = {total_count: 1, incomplete_results : false, items: [{
        full_name: "angular/angular",
        updated_at: "2019-10-13T07:46:35Z",
        stargazers_count: 52762,
        language: "TypeScript",
        html_url: "https://github.com/angular/angular",
        description: "One framework. Mobile & desktop."
    }
    ]};
      httpService.getGitHubEnquiry(1,"angular",1).subscribe(data => {
        expect(data.mapData).toEqual(mockGitHubData);
      });

      const req = httpTestingController.expectOne('https://api.github.com/search/repositories?per_page=1&page=1&amp;q=angular');

      expect(req.request.method).toBe('GET');

      req.flush({
        mapData: mockGitHubData
      });
    });

    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});
