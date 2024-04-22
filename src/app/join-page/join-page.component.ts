import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SigningFormComponent } from '../signing-form/signing-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-join-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SigningFormComponent, RouterLink],
  templateUrl: './join-page.component.html',
  styleUrl: './join-page.component.scss'
})
export class JoinPageComponent {

}
