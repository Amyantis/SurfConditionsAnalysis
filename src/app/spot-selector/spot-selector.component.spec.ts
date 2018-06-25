import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotSelectorComponent } from './spot-selector.component';

describe('SpotSelectorComponent', () => {
  let component: SpotSelectorComponent;
  let fixture: ComponentFixture<SpotSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
