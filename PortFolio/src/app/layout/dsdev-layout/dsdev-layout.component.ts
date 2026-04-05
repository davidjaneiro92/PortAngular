import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-dsdev-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dsdev-layout.component.html',
  styleUrl: './dsdev-layout.component.scss'
})
export class DsdevLayoutComponent {
  readonly themeService = inject(ThemeService);
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);
  readonly currentYear = signal(new Date().getFullYear());

  readonly navItems = signal<NavItem[]>([
    { label: 'Início', route: '/dsdev', icon: 'ri-home-4-line' },
    { label: 'Serviços', route: '/dsdev/servicos', icon: 'ri-service-line' },
    { label: 'Integrações', route: '/dsdev/integracoes', icon: 'ri-links-line' },
    { label: 'Projetos', route: '/dsdev/projetos', icon: 'ri-folder-line' },
    { label: 'Diferenciais', route: '/dsdev/diferenciais', icon: 'ri-star-line' },
    { label: 'Contato', route: '/dsdev/contato', icon: 'ri-mail-send-line' }
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
