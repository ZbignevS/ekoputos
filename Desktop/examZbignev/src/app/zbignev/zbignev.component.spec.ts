import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbignevComponent } from './zbignev.component';

describe('ZbignevComponent', () => {
  let component: ZbignevComponent;
  let fixture: ComponentFixture<ZbignevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbignevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbignevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
