import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldsSummaryComponent } from './worlds-summary.component';

describe('WorldsSummaryComponent', () => {
  let component: WorldsSummaryComponent;
  let fixture: ComponentFixture<WorldsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
