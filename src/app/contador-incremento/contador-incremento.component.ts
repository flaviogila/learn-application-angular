import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-incremento',
  templateUrl: './contador-incremento.component.html',
  styleUrls: ['./contador-incremento.component.css']
})
export class ContadorIncrementoComponent implements OnInit {

  public numero = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.numero = this.numero + 1;
    this.numero++;
  }

}
