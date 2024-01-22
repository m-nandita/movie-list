import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertMovieComponent } from './upsert-movie.component';

describe('UpsertMovieComponent', () => {
  let component: UpsertMovieComponent;
  let fixture: ComponentFixture<UpsertMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsertMovieComponent]
    });
    fixture = TestBed.createComponent(UpsertMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
