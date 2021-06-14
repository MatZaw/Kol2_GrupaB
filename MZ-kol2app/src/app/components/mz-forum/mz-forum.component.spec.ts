import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MZForumComponent } from './mz-forum.component';

describe('MZForumComponent', () => {
  let component: MZForumComponent;
  let fixture: ComponentFixture<MZForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MZForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MZForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
