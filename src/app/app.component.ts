import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApi';

  constructor(private dataService: DataService) {
   
    
  }
}
