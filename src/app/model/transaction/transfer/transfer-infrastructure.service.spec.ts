import { TestBed } from '@angular/core/testing';

import { TransferInfrastructureService } from './transfer-infrastructure.service';

describe('TransferInfrastructureService', () => {
  let service: TransferInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
