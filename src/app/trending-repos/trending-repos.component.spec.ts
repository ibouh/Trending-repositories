import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingReposComponent } from './trending-repos.component';

describe('TrendingReposComponent', () => {
  let component: TrendingReposComponent;
  let fixture: ComponentFixture<TrendingReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
