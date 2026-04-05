import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  private readonly profileService = inject(ProfileService);
  readonly profile = this.profileService.getProfile();
  readonly services = this.profileService.getFreelancerServices();
}
