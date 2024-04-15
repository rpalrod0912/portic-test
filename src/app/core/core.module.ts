import { NgModule } from '@angular/core';

import { MerchandiseMultiselectComponent } from './components/merchandise-multiselect/merchandise-multiselect.component';
import { SharedModule } from '../shared/shared.module';
import { PortsMultiselectComponent } from './components/ports-multiselect/ports-multiselect.component';
import { CompaniesMultiselectComponent } from './components/companies-multiselect/companies-multiselect.component';

@NgModule({
  declarations: [
    MerchandiseMultiselectComponent,
    PortsMultiselectComponent,
    CompaniesMultiselectComponent,
  ],
  exports: [
    CompaniesMultiselectComponent,
    MerchandiseMultiselectComponent,
    PortsMultiselectComponent,
  ],
  imports: [SharedModule],

  providers: [],
})
export class CoreModule {}
