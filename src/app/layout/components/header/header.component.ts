import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

interface NavItem {
  label: string;
  fragment: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);
  readonly activeSection = signal('home');

  readonly navItems = signal<NavItem[]>([
    { label: 'Home', fragment: 'home', icon: 'ri-home-4-line' },
    { label: 'Sobre', fragment: 'sobre', icon: 'ri-user-line' },
    { label: 'Habilidades', fragment: 'habilidades', icon: 'ri-code-s-slash-line' },
    { label: 'Experiência', fragment: 'experiencia', icon: 'ri-briefcase-line' },
    { label: 'Projetos', fragment: 'projetos', icon: 'ri-folder-line' },
    { label: 'Contato', fragment: 'contato', icon: 'ri-mail-send-line' }
  ]);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
    this.updateActiveSection();
  }

  scrollToSection(fragment: string): void {
    this.closeMobileMenu();
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  private updateActiveSection(): void {
    const sections = ['contato', 'projetos', 'experiencia', 'habilidades', 'sobre', 'home'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }
}
