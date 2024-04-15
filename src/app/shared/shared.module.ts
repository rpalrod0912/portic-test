import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelectGroupComponent } from './components/multi-select/multi-select-group.component';
import { FormsModule } from '@angular/forms';
import { ChipsComponent } from './components/chips/chips.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [MultiSelectGroupComponent, ChipsComponent, HeaderComponent],
  imports: [MultiSelectModule, FormsModule],
  exports: [MultiSelectGroupComponent, ChipsComponent, HeaderComponent],
  providers: [],
})
export class SharedModule {}
