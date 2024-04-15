import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseMultiselectComponent } from './merchandise-multiselect.component';

describe('MerchandiseMultiselectComponent', () => {
  let component: MerchandiseMultiselectComponent;
  let fixture: ComponentFixture<MerchandiseMultiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchandiseMultiselectComponent]
    });
    fixture = TestBed.createComponent(MerchandiseMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
