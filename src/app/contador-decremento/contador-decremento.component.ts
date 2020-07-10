import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-decremento',
  templateUrl: './contador-decremento.component.html',
  styleUrls: ['./contador-decremento.component.css']
})
export class ContadorDecrementoComponent implements OnInit {

  public numero = 0;

  constructor() { }

  ngOnInit(): void {
  }

  decrement(){
    this.numero = this.numero -1;
    this.numero--;
  }
}
