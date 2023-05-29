import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExotwoComponent } from './exotwo.component';

describe('ExotwoComponent', () => {
  let component: ExotwoComponent;
  let fixture: ComponentFixture<ExotwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExotwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExotwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
