import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MZForumDetailsComponent } from './mz-forum-details.component';

describe('MZForumDetailsComponent', () => {
  let component: MZForumDetailsComponent;
  let fixture: ComponentFixture<MZForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MZForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MZForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
