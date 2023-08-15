import { SubtracaoService } from './services/subtracao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtracaoComponent } from './subtracao';
import { SubtracaoService } from './service';



@NgModule({
  declarations: [
    SubtracaoComponent
  ],
  imports: [
    CommonModule
  ],
exports: [

  SubtracaoComponent
], 
providers: [
  SubtracaoService
]
})
export class SubtracaoModule { }
