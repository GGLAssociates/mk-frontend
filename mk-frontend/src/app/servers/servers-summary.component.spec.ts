import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersSummaryComponent } from './servers-summary.component';

describe('ServersSummaryComponent', () => {
  let component: ServersSummaryComponent;
  let fixture: ComponentFixture<ServersSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
