import { TestBed } from '@angular/core/testing';
import { DevAppComponent } from './dev-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DevAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DevAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-mfe'`, () => {
    const fixture = TestBed.createComponent(DevAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-mfe');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DevAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-mfe app is running!');
  });
});
