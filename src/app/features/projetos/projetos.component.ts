import { Component, inject } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-projetos',
  standalone: true,
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  private readonly profileService = inject(ProfileService);
  readonly projects = this.profileService.getProjects();
}
