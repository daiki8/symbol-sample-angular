import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransferComponent } from './transfer.component';

describe('ViewTransferComponent', () => {
  let component: ViewTransferComponent;
  let fixture: ComponentFixture<ViewTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
