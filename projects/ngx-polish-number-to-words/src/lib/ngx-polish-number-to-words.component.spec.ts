import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPolishNumberToWordsComponent } from './ngx-polish-number-to-words.component';

describe('NgxPolishNumberToWordsComponent', () => {
  let component: NgxPolishNumberToWordsComponent;
  let fixture: ComponentFixture<NgxPolishNumberToWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPolishNumberToWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPolishNumberToWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
