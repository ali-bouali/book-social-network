import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksComponent } from './my-books.component';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBooksComponent]
    });
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
