import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaskestComponent } from './baskest.component';

describe('BaskestComponent', () => {
  let component: BaskestComponent;
  let fixture: ComponentFixture<BaskestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaskestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaskestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
