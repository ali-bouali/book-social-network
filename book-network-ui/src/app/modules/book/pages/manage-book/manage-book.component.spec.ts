import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookComponent } from './manage-book.component';

describe('ManageBookComponent', () => {
  let component: ManageBookComponent;
  let fixture: ComponentFixture<ManageBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBookComponent]
    });
    fixture = TestBed.createComponent(ManageBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
