import { TestBed } from '@angular/core/testing';

import { NgxPolishNumberToWordsService } from './ngx-polish-number-to-words.service';

describe('NgxPolishNumberToWordsService', () => {
  let service: NgxPolishNumberToWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPolishNumberToWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
