import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageimComponent } from './manageim.component';

describe('ManageimComponent', () => {
  let component: ManageimComponent;
  let fixture: ComponentFixture<ManageimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
