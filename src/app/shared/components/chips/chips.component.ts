import { Component, Input, OnInit } from '@angular/core';
import { MultiSelectItems } from 'src/app/core/interfaces/multiselect.interface';
import { Ports } from 'src/app/core/interfaces/ports.interface';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'chips',
  templateUrl: './chips.component.html',
})
export class ChipsComponent {
  @Input() placeholder!: string;

  @Input() items!: MultiSelectItems[];

  selectedCities!: MultiSelectItems[];

  constructor() {}
}
