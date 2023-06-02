import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChildContentComponent } from './test-child-content.component';

describe('TestChildContentComponent', () => {
  let component: TestChildContentComponent;
  let fixture: ComponentFixture<TestChildContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestChildContentComponent]
    });
    fixture = TestBed.createComponent(TestChildContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
