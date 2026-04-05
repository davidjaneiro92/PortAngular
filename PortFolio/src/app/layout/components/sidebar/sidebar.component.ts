import { Component, signal } from '@angular/core';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly socialLinks = signal<SocialLink[]>([
    { icon: 'ri-linkedin-box-line', url: 'https://www.linkedin.com/in/david-santos-de-santana-59a120199', label: 'LinkedIn' },
    { icon: 'ri-mail-line', url: 'mailto:davidjaneiro92@gmail.com', label: 'Email' }
  ]);
}
