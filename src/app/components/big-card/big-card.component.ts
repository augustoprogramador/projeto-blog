import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {

  @Input() photoCover: string = 'assets/imgs/eren-yaeger.jpg';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
