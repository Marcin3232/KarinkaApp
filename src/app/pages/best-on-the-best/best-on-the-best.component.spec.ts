import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOnTheBestComponent } from './best-on-the-best.component';

describe('BestOnTheBestComponent', () => {
  let component: BestOnTheBestComponent;
  let fixture: ComponentFixture<BestOnTheBestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestOnTheBestComponent]
    });
    fixture = TestBed.createComponent(BestOnTheBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
