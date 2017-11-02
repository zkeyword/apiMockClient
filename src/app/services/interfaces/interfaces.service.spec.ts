/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterfacesService } from './interfaces.service';

describe('InterfacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterfacesService]
    });
  });

  it('should ...', inject([InterfacesService], (service: InterfacesService) => {
    expect(service).toBeTruthy();
  }));
});
