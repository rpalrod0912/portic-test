import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsMultiselectComponent } from './ports-multiselect.component';

describe('PortsMultiselectComponent', () => {
  let component: PortsMultiselectComponent;
  let fixture: ComponentFixture<PortsMultiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortsMultiselectComponent]
    });
    fixture = TestBed.createComponent(PortsMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
