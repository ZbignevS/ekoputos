import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBoxesComponent } from './hero-boxes.component';

describe('HeroBoxesComponent', () => {
  let component: HeroBoxesComponent;
  let fixture: ComponentFixture<HeroBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
