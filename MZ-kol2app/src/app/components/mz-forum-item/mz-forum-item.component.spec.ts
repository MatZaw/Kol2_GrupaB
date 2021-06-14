import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MZForumItemComponent } from './mz-forum-item.component';

describe('MZForumItemComponent', () => {
  let component: MZForumItemComponent;
  let fixture: ComponentFixture<MZForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MZForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MZForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
