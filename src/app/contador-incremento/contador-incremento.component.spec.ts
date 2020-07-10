import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorIncrementoComponent } from './contador-incremento.component';

describe('ContadorIncrementoComponent', () => {
  let component: ContadorIncrementoComponent;
  let fixture: ComponentFixture<ContadorIncrementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorIncrementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorIncrementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
