import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAtionsComponent } from './quick-ations.component';

describe('QuickAtionsComponent', () => {
  let component: QuickAtionsComponent;
  let fixture: ComponentFixture<QuickAtionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAtionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
