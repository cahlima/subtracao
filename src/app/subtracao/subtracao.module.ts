import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtracaoComponent } from './subtracao';
import { SubtracaoService } from './services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SubtracaoComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule

  ],
exports: [

  SubtracaoComponent,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
], 
providers: [
  SubtracaoService
]
})
export class SubtracaoModule { }
