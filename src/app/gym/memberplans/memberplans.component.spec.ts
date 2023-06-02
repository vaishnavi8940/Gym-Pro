import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberplansComponent } from './memberplans.component';

describe('MemberplansComponent', () => {
  let component: MemberplansComponent;
  let fixture: ComponentFixture<MemberplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberplansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
