import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByDurationComponent } from './search-by-duration.component';

describe('SearchByDurationComponent', () => {
  let component: SearchByDurationComponent;
  let fixture: ComponentFixture<SearchByDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
