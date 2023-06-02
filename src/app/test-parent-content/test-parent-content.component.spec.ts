import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestParentContentComponent } from './test-parent-content.component';

describe('TestParentContentComponent', () => {
  let component: TestParentContentComponent;
  let fixture: ComponentFixture<TestParentContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestParentContentComponent]
    });
    fixture = TestBed.createComponent(TestParentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
