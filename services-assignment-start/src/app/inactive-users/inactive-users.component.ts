import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CountService]
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService, private countService: CountService) {}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.countService.increaseCount();
    console.log('Number of set to active actions count is: ' + this.countService.count);
  }
}
