import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collatzcomponent',
  templateUrl: './collatzcomponent.component.html',
  styleUrls: ['./collatzcomponent.component.css'],
})
export class CollatzcomponentComponent {
  number: number;
  collatzResult: String;

  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit(){
    this._activeRoute.params.subscribe((parametros: Params) => {
        this.number= +parametros['number'];
        this.collatzResult = this.calculateCollatz(this.number)
      });
}
}
