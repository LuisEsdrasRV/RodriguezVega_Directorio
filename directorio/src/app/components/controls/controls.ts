import { Component, output } from '@angular/core';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.html',
  styleUrl: './controls.css',
})
export class Controls {
  orderByIdClick = output<void>();
  orderByNameClick = output<void>();
  reverse = output<void>();

  onOrderByIdClick(): void {
    this.orderByIdClick.emit();
  }

  onOrderByNameClick(): void {
    this.orderByNameClick.emit();
  }

  onReverseClick(): void {
    this.reverse.emit();
  } 

}
