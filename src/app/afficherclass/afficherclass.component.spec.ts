import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherclassComponent } from './afficherclass.component';

describe('AfficherclassComponent', () => {
  let component: AfficherclassComponent;
  let fixture: ComponentFixture<AfficherclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
