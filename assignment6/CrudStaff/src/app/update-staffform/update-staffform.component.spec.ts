import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStaffformComponent } from './update-staffform.component';

describe('UpdateStaffformComponent', () => {
  let component: UpdateStaffformComponent;
  let fixture: ComponentFixture<UpdateStaffformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStaffformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStaffformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
