import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticComponent } from './optic.component';

describe('OpticComponent', () => {
  let component: OpticComponent;
  let fixture: ComponentFixture<OpticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
