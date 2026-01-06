import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBtnComponent } from './general-btn.component';

describe('LoginBtnComponent', () => {
  let component: GeneralBtnComponent;
  let fixture: ComponentFixture<GeneralBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
