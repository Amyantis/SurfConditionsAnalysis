import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TidesComponent} from './tides.component';

describe('TidesComponent', () => {
  let component: TidesComponent;
  let fixture: ComponentFixture<TidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TidesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
