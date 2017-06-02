import { Component, trigger, state, style } from '@angular/core';

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
        backgroundColor: '#00f',
        transform: 'translateX(100px)'
      }))
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
