import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserdetailsComponent } from './update-userdetails.component';

describe('UpdateUserdetailsComponent', () => {
  let component: UpdateUserdetailsComponent;
  let fixture: ComponentFixture<UpdateUserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
