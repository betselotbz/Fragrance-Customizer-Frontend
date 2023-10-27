import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFragranceComponent } from './user-fragrance.component';

describe('UserFragranceComponent', () => {
  let component: UserFragranceComponent;
  let fixture: ComponentFixture<UserFragranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFragranceComponent]
    });
    fixture = TestBed.createComponent(UserFragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
