import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': '#f00',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': '#00f',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))
    ])
  ]
})
export class AppComponent {
	list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}

  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
  }
}
