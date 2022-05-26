import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewImComponent } from './add-new-im.component';

describe('AddNewImComponent', () => {
  let component: AddNewImComponent;
  let fixture: ComponentFixture<AddNewImComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewImComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
