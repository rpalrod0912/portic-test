import { Component, Input } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'multi-select-group',
  templateUrl: './multi-select-group.component.html',
})
export class MultiSelectGroupComponent {
  @Input() groupedItems!: SelectItemGroup[];

  selectedCities!: City[];
}
