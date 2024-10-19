import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcoinComponent } from './cardcoin.component';

describe('CardcoinComponent', () => {
  let component: CardcoinComponent;
  let fixture: ComponentFixture<CardcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardcoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
