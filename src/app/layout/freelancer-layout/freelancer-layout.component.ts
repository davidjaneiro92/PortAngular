import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-freelancer-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './freelancer-layout.component.html',
  styleUrl: './freelancer-layout.component.scss'
})
export class FreelancerLayoutComponent {
  readonly themeService = inject(ThemeService);
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);
  readonly currentYear = signal(new Date().getFullYear());

  readonly navItems = signal<NavItem[]>([
    { label: 'Home', route: '/freelancer', icon: 'ri-home-4-line' },
    { label: 'Serviços', route: '/freelancer/servicos', icon: 'ri-service-line' },
    { label: 'Projetos', route: '/freelancer/projetos', icon: 'ri-folder-line' },
    { label: 'Diferenciais', route: '/freelancer/diferenciais', icon: 'ri-star-line' },
    { label: 'Contato', route: '/freelancer/contato', icon: 'ri-mail-send-line' }
  ]);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
