import { TestBed } from '@angular/core/testing';

import { AsignacionpedidoService } from './asignacionpedido.service';

describe('AsignacionpedidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacionpedidoService = TestBed.get(AsignacionpedidoService);
    expect(service).toBeTruthy();
  });
});
