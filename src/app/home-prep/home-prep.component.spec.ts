import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrepComponent } from './home-prep.component';

describe('HomePrepComponent', () => {
  let component: HomePrepComponent;
  let fixture: ComponentFixture<HomePrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
