import { Component } from '@angular/core';
import { MultiSelectItems } from '../../interfaces/multiselect.interface';

@Component({
  selector: 'app-ports-multiselect',
  templateUrl: './ports-multiselect.component.html',
  styleUrls: ['./ports-multiselect.component.scss'],
})
export class PortsMultiselectComponent {
  ports: MultiSelectItems[];

  constructor() {
    this.ports = [
      { name: 'Puerto de Algeciras', code: 'AL' },
      { name: 'Puerto de Barcelona', code: 'PB' },
      { name: 'Puerto de Valencia', code: 'PV' },
      { name: 'Puerto de Bilbao', code: 'PBL' },
      { name: 'Puerto de Tarragona', code: 'PTR' },
      { name: 'Puerto de Las Palmas', code: 'PIC' },
      { name: 'Puerto de Palma de Mallorca', code: 'PPM' },
      { name: 'Puerto de Cartagena', code: 'PCR' },
      { name: 'Puerto de Santa Cruz de Tenerife', code: 'PST' },
      { name: 'Puerto de Huelva', code: 'PH' },
      { name: 'Puerto de La Coruña', code: 'PLC' },
      { name: 'Puerto de Castellón', code: 'PCL' },
      { name: 'Puerto de Santander', code: 'PSA' },
      { name: 'Puerto de Vigo', code: 'PST' },
      { name: 'Puerto de Motril', code: 'PMTR' },
      { name: 'Puerto de Ferrol', code: 'PMTR' },
      { name: 'Puerto de Marín', code: 'PMAR' },
      { name: 'Puerto de Gijón', code: 'PGJ' },
      { name: 'Puerto de Mahón', code: 'PMH' },
      { name: 'Puerto de Ceuta', code: 'PCT' },
    ];
  }
}
