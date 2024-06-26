import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-function',
  standalone: true,
  imports: [],
  templateUrl: './angular-function.component.html',
  styleUrl: './angular-function.component.css'
})
export class AngularFunctionComponent {
  addNumbers = function(a: any, b: any) {
    return a + b;
};

// You can also define a function to update the scope variable
updateMessage(): void {
  this.message = "Hello, Angular!";
}
// Initialize a scope variable
    message = "Welcome!";
}
