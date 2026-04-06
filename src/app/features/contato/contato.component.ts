import { Component, inject, signal } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  private readonly profileService = inject(ProfileService);
  readonly contact = this.profileService.getContact();
  readonly copied = signal(false);

  copyEmail(): void {
    navigator.clipboard.writeText(this.contact().email).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
