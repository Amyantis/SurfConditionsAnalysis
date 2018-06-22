import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesTableComponent } from './waves-table.component';

describe('WavesTableComponent', () => {
  let component: WavesTableComponent;
  let fixture: ComponentFixture<WavesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WavesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
