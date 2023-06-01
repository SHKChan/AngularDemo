import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourOfourComponent } from './page-four-ofour.component';

describe('PageFourOfourComponent', () => {
  let component: PageFourOfourComponent;
  let fixture: ComponentFixture<PageFourOfourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFourOfourComponent]
    });
    fixture = TestBed.createComponent(PageFourOfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
