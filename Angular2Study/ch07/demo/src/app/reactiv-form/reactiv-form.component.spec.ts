import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivFormComponent } from './reactiv-form.component';

describe('ReactivFormComponent', () => {
  let component: ReactivFormComponent;
  let fixture: ComponentFixture<ReactivFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
