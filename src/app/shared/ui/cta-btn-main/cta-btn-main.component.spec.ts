import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBtnMainComponent } from './cta-btn-main.component';

describe('CtaBtnMainComponent', () => {
  let component: CtaBtnMainComponent;
  let fixture: ComponentFixture<CtaBtnMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBtnMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtaBtnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
