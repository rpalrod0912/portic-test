import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { Merchandise } from '../../interfaces/merchandise.interface';

@Component({
  selector: 'app-merchandise-multiselect',
  templateUrl: './merchandise-multiselect.component.html',
  styleUrls: ['./merchandise-multiselect.component.scss'],
})
export class MerchandiseMultiselectComponent {
  groupedItems: SelectItemGroup[];

  selectedMerchandises!: Merchandise;

  constructor() {
    this.groupedItems = [
      {
        label: 'Abonos',
        value: 'Abonos',
        items: [
          {
            label: '3101 - Abonos origen animal o vegetal',
            value: '3101 - Abonos origen animal o vegetal',
          },
          {
            label: '3102 - Abonos minerales o químicos',
            value: '3102 - Abonos minerales o químicos',
          },
          { label: '3103 - Sulfato amónico', value: '3103 - Sulfato amónico' },
          {
            label: '3104 - Cloruro de potasio',
            value: '3104 - Cloruro de potasio',
          },
        ],
      },
      {
        label: 'Aceites y preparados perfumeria',
        value: 'Aceites y preparados perfumeria',
        items: [
          {
            label: '4101 - Aceites esenciales',
            value: '4101 - Aceites esenciales',
          },
          {
            label: '4102 - Perfumeria',
            value: '4102 - Perfumeria',
          },
          {
            label: '4103 - Preparaciones capilares',
            value: '4103 - Preparaciones capilares',
          },
        ],
      },
      {
        label: 'Animales vivos',
        value: 'Animales vivos',
        items: [
          {
            label: '5101 - Caballos y Asnos',
            value: '5101 - Caballos y Asnos',
          },
          {
            label: '5102 - Animales vivos especie Bobina',
            value: '5102 - Animales vivos especie Bobina',
          },
          {
            label: '5103 - Animales vivos especie Porcina',
            value: '5103 - Animales vivos especie Porcina',
          },
          {
            label: '5104 - Gallos, gallinas',
            value: '5104 - Gallos, gallinas',
          },
        ],
      },
      {
        label: 'Bebidas, líquidos alcoholicos y viña',
        value: 'Bebidas, líquidos alcoholicos y viña',
        items: [
          {
            label: '6101 - Aguas minerales - envasada',
            value: '6101 - Aguas minerales - envasada',
          },
          {
            label: '6102 - Cerveza',
            value: '6102 - Cerveza',
          },
          {
            label: '6103 - Vino',
            value: '6103 - Vino',
          },
          {
            label: '6104 - Sidra',
            value: '6104 - Sidra',
          },
        ],
      },
      {
        label: 'Juguetes',
        value: 'Juguetes',
        items: [
          {
            label: '7101 - Muñecas',
            value: '7101 - Muñecas',
          },
          {
            label: '7102 - Juguetes',
            value: '7102 - Juguetes',
          },
        ],
      },
      {
        label: 'Manufacturas diversas',
        value: 'Manufacturas diversas',
        items: [
          {
            label: '8101 - Marfil, hueso, concha de tortuga',
            value: '8101 - Marfil, hueso, concha de tortuga',
          },
          {
            label: '8102 - Escobas, cepillos y brochas',
            value: '8102 - Escobas, cepillos y brochas',
          },
          {
            label: '8103 - Lápices, minas',
            value: '8103 - Lápices, minas',
          },
          {
            label: '8104 - Encendedores y mecheros',
            value: '8104 - Encendedores y mecheros',
          },
        ],
      },
    ];
  }
}
