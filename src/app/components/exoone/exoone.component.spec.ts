import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExooneComponent } from './exoone.component';

describe('ExooneComponent', () => {
  let component: ExooneComponent;
  let fixture: ComponentFixture<ExooneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExooneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
