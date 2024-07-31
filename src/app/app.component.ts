import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RetiroComponent} from "./components/cajero/retiro/retiro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RetiroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CajeroBAZ';
}
