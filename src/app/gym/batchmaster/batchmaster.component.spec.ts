import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchmasterComponent } from './batchmaster.component';

describe('BatchmasterComponent', () => {
  let component: BatchmasterComponent;
  let fixture: ComponentFixture<BatchmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
