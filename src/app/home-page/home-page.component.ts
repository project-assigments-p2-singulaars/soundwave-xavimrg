import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
