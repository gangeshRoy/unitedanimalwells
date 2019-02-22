import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphpiechartComponent } from './graphpiechart.component';

describe('GraphpiechartComponent', () => {
  let component: GraphpiechartComponent;
  let fixture: ComponentFixture<GraphpiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphpiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
