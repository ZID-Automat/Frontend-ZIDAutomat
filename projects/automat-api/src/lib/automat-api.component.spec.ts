import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatApiComponent } from './automat-api.component';

describe('AutomatApiComponent', () => {
  let component: AutomatApiComponent;
  let fixture: ComponentFixture<AutomatApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomatApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
