import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectProfileComponent } from './redirect-profile.component';

describe('RedirectProfileComponent', () => {
  let component: RedirectProfileComponent;
  let fixture: ComponentFixture<RedirectProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
