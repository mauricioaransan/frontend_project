import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaListComponent } from './firma-list.component';

describe('FirmaListComponent', () => {
  let component: FirmaListComponent;
  let fixture: ComponentFixture<FirmaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
