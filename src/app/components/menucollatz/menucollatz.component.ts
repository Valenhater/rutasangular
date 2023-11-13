import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',

  templateUrl: './menucollatz.component.html',

  styleUrls: ['./menucollatz.component.css'],
})
export class MenucollatzComponent implements OnInit {
  public numbers!: Array<number>;

  ngOnInit(): void {
    this.numbers = new Array<number>();

    for (let i = 1; i <= 7; i++) {
      let random = Math.floor(Math.random() * 100) + 1;

      this.numbers.push(random);
    }
  }
}
