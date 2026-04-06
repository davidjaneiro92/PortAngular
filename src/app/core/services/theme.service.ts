import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'ds-portfolio-theme';
  readonly theme = signal<Theme>(this.getStoredTheme());

  constructor() {
    effect(() => {
      const current = this.theme();
      document.documentElement.setAttribute('data-theme', current);
      localStorage.setItem(this.storageKey, current);
    });
  }

  toggle(): void {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }

  private getStoredTheme(): Theme {
    const stored = localStorage.getItem(this.storageKey) as Theme;
    return stored === 'light' ? 'light' : 'dark';
  }
}
