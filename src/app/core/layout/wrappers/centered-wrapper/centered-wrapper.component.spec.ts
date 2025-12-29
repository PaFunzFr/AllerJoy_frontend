import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredWrapperComponent } from './centered-wrapper.component';

describe('CenteredWrapperComponent', () => {
  let component: CenteredWrapperComponent;
  let fixture: ComponentFixture<CenteredWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenteredWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
