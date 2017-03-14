import { TestBed, inject } from '@angular/core/testing';

import { MaterializeComponentsService } from './materialize-components.service';

describe('MaterializeComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterializeComponentsService]
    });
  });

  it('should ...', inject([MaterializeComponentsService], (service: MaterializeComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
