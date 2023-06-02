import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberpaymentsComponent } from './memberpayments.component';

describe('MemberpaymentsComponent', () => {
  let component: MemberpaymentsComponent;
  let fixture: ComponentFixture<MemberpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberpaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
