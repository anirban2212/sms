import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrdirectiveComponent } from './strdirective.component';

describe('StrdirectiveComponent', () => {
  let component: StrdirectiveComponent;
  let fixture: ComponentFixture<StrdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrdirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
