import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LandingComponent } from './view/landing/landing.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
describe('AppComponent', () => {
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'landing', component: LandingComponent }
        ])
      ],
      declarations: [
        AppComponent,
        LandingComponent
      ],
    }).compileComponents();
  }));

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it(`should go to landing page url`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate(['/landing']).then(() => {
      expect(location.path()).toBe('/landing');
    });
  }));
});
