import { Component, inject } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  private readonly profileService = inject(ProfileService);
  readonly experiences = this.profileService.getExperiences();
}
