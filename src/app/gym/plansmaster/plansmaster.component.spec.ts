import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansmasterComponent } from './plansmaster.component';

describe('PlansmasterComponent', () => {
  let component: PlansmasterComponent;
  let fixture: ComponentFixture<PlansmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
