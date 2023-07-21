import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLink = 'Accueil';
  
  setActiveLink(link: string) {
    this.currentLink = link;
  }
}
