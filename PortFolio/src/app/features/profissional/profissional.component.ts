import { Component, inject } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profissional',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profissional.component.html',
  styleUrl: './profissional.component.scss'
})
export class ProfissionalComponent {
  private readonly profileService = inject(ProfileService);
  readonly profile = this.profileService.getProfile();
  readonly experiences = this.profileService.getExperiences();
  readonly skills = this.profileService.getSkills();
  readonly projects = this.profileService.getProjects();
  readonly contact = this.profileService.getContact();

  copied = false;

  copyEmail(): void {
    navigator.clipboard.writeText(this.contact().email).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
