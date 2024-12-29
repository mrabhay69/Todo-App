import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink]
})
export class AppComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Todo-App';
}
