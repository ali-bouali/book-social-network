import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedBookListComponent } from './borrowed-book-list.component';

describe('BorrowedBookListComponent', () => {
  let component: BorrowedBookListComponent;
  let fixture: ComponentFixture<BorrowedBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowedBookListComponent]
    });
    fixture = TestBed.createComponent(BorrowedBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
