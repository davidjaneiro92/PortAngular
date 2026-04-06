import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-contato-freelancer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoFreelancerComponent {
  private readonly profileService = inject(ProfileService);
  readonly contact = this.profileService.getContact();
  readonly copied = signal(false);

  copyEmail(): void {
    const email = this.contact().email;
    navigator.clipboard.writeText(email).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    });
  }
}
