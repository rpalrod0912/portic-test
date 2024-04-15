import { Component } from '@angular/core';
import { MultiSelectItems } from '../../interfaces/multiselect.interface';

@Component({
  selector: 'app-companies-multiselect',
  templateUrl: './companies-multiselect.component.html',
  styleUrls: ['./companies-multiselect.component.scss'],
})
export class CompaniesMultiselectComponent {
  companies: MultiSelectItems[];

  constructor() {
    this.companies = [
      { name: 'Boluda Corporación Marítima', code: 'AL' },
      { name: 'Navantia', code: 'PB' },
      { name: 'Grupo Suardíaz', code: 'PV' },
      { name: 'Balearia', code: 'PBL' },
      { name: 'Grimaldi Group', code: 'PTR' },
      { name: 'Bureau Veritas', code: 'PIC' },
      { name: 'Marítima del Mediterráneo', code: 'PPM' },
      { name: 'Pérez y Cía', code: 'PCR' },
      { name: 'Antonio Armas, S.L', code: 'PST' },
      { name: 'Trasmediterranea', code: 'PH' },
      { name: 'Sociedad de Salvamento y Seguridad Marítima', code: 'PLC' },
      { name: 'Fratelli Cosulich', code: 'PCL' },
      { name: 'Astilleros Gondán', code: 'PSA' },
      { name: 'Grupo Ibaizabal', code: 'PST' },
      { name: 'Bilbao Port Authority', code: 'PMTR' },
      { name: 'Transcoma Shipping', code: 'PMTR' },
      { name: 'López Gandía Group', code: 'PMAR' },
      { name: 'Rumbo Maritime', code: 'PGJ' },
      { name: 'Bergé Marítima', code: 'PMH' },
      { name: 'Grupo Bollo Internacional ', code: 'PCT' },
    ];
  }
}
