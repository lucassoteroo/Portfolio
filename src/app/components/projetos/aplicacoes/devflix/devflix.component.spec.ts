import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevflixComponent } from './devflix.component';

describe('DevflixComponent', () => {
  let component: DevflixComponent;
  let fixture: ComponentFixture<DevflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevflixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
