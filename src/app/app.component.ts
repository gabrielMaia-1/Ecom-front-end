import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ecom';

  ngOnInit(): void {
    
  }
}
