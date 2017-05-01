import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['background-color:yellow'],
  providers: []
})
export class AppComponent {
  title = 'app works!';

  prop = "Data from class";

  onClick(event:any) {
    console.log("Event fired",event);
  }
}
