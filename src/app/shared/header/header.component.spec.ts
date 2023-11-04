import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {

    TestBed
        .configureTestingModule({
          declarations: [HeaderComponent],
        })
        .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display something', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Movie Searcher');
  });
 });
