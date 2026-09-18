import { Component, input, output, signal, WritableSignal } from '@angular/core';
import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {

  user = input.required<User>();

  delete = output<number>();

  onDelete() {
    this.delete.emit(this.user().id);
  }
}
