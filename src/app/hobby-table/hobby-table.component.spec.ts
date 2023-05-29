import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyTableComponent } from './hobby-table.component';

describe('HobbyTableComponent', () => {
  let component: HobbyTableComponent;
  let fixture: ComponentFixture<HobbyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbyTableComponent]
    });
    fixture = TestBed.createComponent(HobbyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
