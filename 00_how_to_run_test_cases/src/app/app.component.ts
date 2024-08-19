import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '00_how_to_run_test_cases';

  sum(a: number, b: number) {
    return a + b;
  }
}
