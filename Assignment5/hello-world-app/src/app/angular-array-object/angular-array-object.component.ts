import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-array-object',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-array-object.component.html',
  styleUrl: './angular-array-object.component.css'
})
export class AngularArrayObjectComponent {

  // Define an array of strings
  names: string[] = ["John", "Jane", "Doe"];
            
  
  // Define an object
  person = {
      name: "John Doe",
      age: 40,
      address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA"
      }
  };



}
