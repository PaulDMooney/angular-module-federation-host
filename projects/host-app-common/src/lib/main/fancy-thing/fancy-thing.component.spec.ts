import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyThingComponent } from './fancy-thing.component';

describe('FancyThingComponent', () => {
  let component: FancyThingComponent;
  let fixture: ComponentFixture<FancyThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyThingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
