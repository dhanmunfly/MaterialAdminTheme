import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImSublistComponent } from './im-sublist.component';

describe('ImSublistComponent', () => {
  let component: ImSublistComponent;
  let fixture: ComponentFixture<ImSublistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImSublistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImSublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
