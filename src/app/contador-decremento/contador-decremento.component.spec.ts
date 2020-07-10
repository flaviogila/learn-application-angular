import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorDecrementoComponent } from './contador-decremento.component';

describe('ContadorDecrementoComponent', () => {
  let component: ContadorDecrementoComponent;
  let fixture: ComponentFixture<ContadorDecrementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorDecrementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorDecrementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
