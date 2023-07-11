import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPagosCuotaComponent } from './formulario-pagos-cuota.component';

describe('FormularioPagosCuotaComponent', () => {
  let component: FormularioPagosCuotaComponent;
  let fixture: ComponentFixture<FormularioPagosCuotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPagosCuotaComponent]
    });
    fixture = TestBed.createComponent(FormularioPagosCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
