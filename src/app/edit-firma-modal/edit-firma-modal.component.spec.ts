import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFirmaModalComponent } from './edit-firma-modal.component';

describe('EditFirmaModalComponent', () => {
  let component: EditFirmaModalComponent;
  let fixture: ComponentFixture<EditFirmaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFirmaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFirmaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
