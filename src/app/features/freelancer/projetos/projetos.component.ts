import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-projetos-freelancer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosFreelancerComponent {
  private readonly profileService = inject(ProfileService);
  readonly projects = this.profileService.getProjects();
}
