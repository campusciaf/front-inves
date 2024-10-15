import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderwebComponent } from './headerweb.component';

describe('HeaderwebComponent', () => {
  let component: HeaderwebComponent;
  let fixture: ComponentFixture<HeaderwebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderwebComponent]
    });
    fixture = TestBed.createComponent(HeaderwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
