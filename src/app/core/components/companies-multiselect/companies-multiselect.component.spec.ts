import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesMultiselectComponent } from './companies-multiselect.component';

describe('CompaniesMultiselectComponent', () => {
  let component: CompaniesMultiselectComponent;
  let fixture: ComponentFixture<CompaniesMultiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesMultiselectComponent]
    });
    fixture = TestBed.createComponent(CompaniesMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
