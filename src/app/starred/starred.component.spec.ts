import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { starredcomponent } from './starred.component';

describe('starredcomponent', () => {
  let component: starredcomponent;
  let fixture: ComponentFixture<starredcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ starredcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(starredcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
