import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningFormComponent } from './signing-form.component';

describe('SigningFormComponent', () => {
  let component: SigningFormComponent;
  let fixture: ComponentFixture<SigningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigningFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
