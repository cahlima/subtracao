import { Component, OnInit } from '@angular/core';
import { SubtracaoService } from '../services';

@Component({
  selector: 'app-subtracao',
  templateUrl: './subtracao.component.html',
  styleUrls: ['./subtracao.component.css']
})
export class SubtracaoComponent implements OnInit {


  constructor(private subtracaoService: SubtracaoService ) {}

  ngOnInit(): void {
    
  }
}
