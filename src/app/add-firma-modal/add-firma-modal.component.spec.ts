import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirmaModalComponent } from './add-firma-modal.component';

describe('AddFirmaModalComponent', () => {
  let component: AddFirmaModalComponent;
  let fixture: ComponentFixture<AddFirmaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFirmaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirmaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
