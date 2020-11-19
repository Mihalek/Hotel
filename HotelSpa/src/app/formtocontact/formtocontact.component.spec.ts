import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtocontactComponent } from './formtocontact.component';

describe('FormtocontactComponent', () => {
  let component: FormtocontactComponent;
  let fixture: ComponentFixture<FormtocontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtocontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtocontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
