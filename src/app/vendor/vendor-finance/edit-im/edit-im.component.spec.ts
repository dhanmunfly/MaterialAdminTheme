import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImComponent } from './edit-im.component';

describe('EditImComponent', () => {
  let component: EditImComponent;
  let fixture: ComponentFixture<EditImComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
