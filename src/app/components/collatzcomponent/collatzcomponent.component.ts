import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatzcomponent',
  templateUrl: './collatzcomponent.component.html',
  styleUrls: ['./collatzcomponent.component.css'],
})
export class CollatzcomponentComponent {
  public numero!: number;

  public numeros!: Array<number>;

  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      if (parametros['num'] != null) {
        this.numero = parseInt(parametros['num']);

        this.generarCollatz();
      }
    });
  }

  generarCollatz(): void {
    this.numeros = new Array<number>();

    let num = this.numero;

    while (num != 1) {
      if (num % 2 == 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }

      this.numeros.push(num);
    }
  }
}
