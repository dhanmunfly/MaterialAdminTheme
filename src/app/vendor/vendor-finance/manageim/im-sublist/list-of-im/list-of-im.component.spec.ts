import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfImComponent } from './list-of-im.component';

describe('ListOfImComponent', () => {
  let component: ListOfImComponent;
  let fixture: ComponentFixture<ListOfImComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfImComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
