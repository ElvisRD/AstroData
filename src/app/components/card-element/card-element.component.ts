import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-element',
  imports: [],
  templateUrl: './card-element.component.html',
  styleUrl: './card-element.component.scss'
})
export class CardElementComponent {
    @Input() dataCard: any;

    constructor() {}
    
}
