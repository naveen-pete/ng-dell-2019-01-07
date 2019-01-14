import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  // template: `
  //   <h2>Inline template demo</h2>
  //   <p>Inline template demo</p>
  // `,

  styleUrls: ['./app.component.css']
  // styles: [
  //   `h2 {
  //       color: red;
  //   }`,
  //   `p {
  //     color: green;
  //   }`
  // ]
})
export class AppComponent {
  title = 'Angular';
}
