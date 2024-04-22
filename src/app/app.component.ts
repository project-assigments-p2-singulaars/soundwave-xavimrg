import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigningFormComponent } from './signing-form/signing-form.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SigningFormComponent, DiscoverPageComponent, JoinPageComponent, HomePageComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'soundwave';
}
