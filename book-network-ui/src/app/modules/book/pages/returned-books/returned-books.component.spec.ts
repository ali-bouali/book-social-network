import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedBooksComponent } from './returned-books.component';

describe('ReturnedBooksComponent', () => {
  let component: ReturnedBooksComponent;
  let fixture: ComponentFixture<ReturnedBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnedBooksComponent]
    });
    fixture = TestBed.createComponent(ReturnedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
