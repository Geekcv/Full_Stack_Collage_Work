import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AngularExpressionsBindingComponent } from './angular-expressions-binding/angular-expressions-binding.component';
import { AngularArrayObjectComponent } from './angular-array-object/angular-array-object.component';
import { AngularFunctionComponent } from './angular-function/angular-function.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HelloWorldComponent,AngularExpressionsBindingComponent,AngularArrayObjectComponent,AngularFunctionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world-app';
}
