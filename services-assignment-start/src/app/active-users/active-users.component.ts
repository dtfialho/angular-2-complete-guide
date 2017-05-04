import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CountService]
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService, private countService: CountService) {}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.countService.increaseCount();
    console.log('Number of set to inactive actions count is: ' + this.countService.count);
  }
}
