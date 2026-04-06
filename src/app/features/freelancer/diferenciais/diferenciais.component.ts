import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-diferenciais',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './diferenciais.component.html',
  styleUrl: './diferenciais.component.scss'
})
export class DiferenciaisComponent {
  private readonly profileService = inject(ProfileService);
  readonly differentials = this.profileService.getFreelancerDifferentials();
}
