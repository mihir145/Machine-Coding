import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accordion_items = [
    {
      id: 1,
      name: 'Do I have to allow the use of Cookies?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      defaultDisplay: false,
    },
    {
      id: 2,
      name: 'How do i change my password?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      defaultDisplay: false,
    },
    {
      id: 3,
      name: 'What is Lorem ipsum?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      defaultDisplay: false,
    },
    {
      id: 4,
      name: 'How can i order the item?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      defaultDisplay: false,
    },
  ];
  allowMutliple: boolean = false;

  constructor() {}

  allowMutipleToggle() {
    this.allowMutliple = !this.allowMutliple;
  }

  toggle(id: number) {
    this.accordion_items.forEach((item, index) => {
      let temp = this.accordion_items[index].defaultDisplay;
      if (this.accordion_items[index].id == id) {
        if (this.accordion_items[index].defaultDisplay) temp = false;
        else temp = true;
      } else if (!this.allowMutliple) temp = false;

      this.accordion_items[index].defaultDisplay = temp;
    });
  }
}
