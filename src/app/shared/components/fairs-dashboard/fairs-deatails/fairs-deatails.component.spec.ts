import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDeatailsComponent } from './fairs-deatails.component';

describe('FairsDeatailsComponent', () => {
  let component: FairsDeatailsComponent;
  let fixture: ComponentFixture<FairsDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
