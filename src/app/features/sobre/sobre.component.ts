import { Component, inject } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  private readonly profileService = inject(ProfileService);
  readonly profile = this.profileService.getProfile();
}
