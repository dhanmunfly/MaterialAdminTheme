import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMclrComponent } from './manage-mclr.component';

describe('ManageMclrComponent', () => {
  let component: ManageMclrComponent;
  let fixture: ComponentFixture<ManageMclrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMclrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMclrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
