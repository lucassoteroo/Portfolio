import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosPageComponent } from './certificados-page.component';

describe('CertificadosPageComponent', () => {
  let component: CertificadosPageComponent;
  let fixture: ComponentFixture<CertificadosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificadosPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CertificadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
