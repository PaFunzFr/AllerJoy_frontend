import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenWrapperComponent } from './fullscreen-wrapper.component';

describe('FullscreenWrapperComponent', () => {
  let component: FullscreenWrapperComponent;
  let fixture: ComponentFixture<FullscreenWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullscreenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
