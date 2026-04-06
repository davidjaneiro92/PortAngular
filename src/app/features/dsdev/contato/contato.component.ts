import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dsdev-contato',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  readonly email = signal('');
  readonly message = signal('');
  readonly selectedService = signal('');
  readonly submitted = signal(false);

  readonly services = signal([
    'Sistemas Web Empresariais',
    'ERP Personalizado',
    'PDV para Lojas',
    'Aplicativos Sob Medida',
    'Sites Institucionais',
    'Sites com Pagamento Online',
    'Integração com WhatsApp / APIs',
    'Outro'
  ]);

  submitForm(): void {
    const service = this.selectedService();
    const msg = this.message();
    const emailVal = this.email();
    const text = `Olá! Tenho interesse em: ${service || 'serviços DSDev'}.\n\nE-mail: ${emailVal}\n\nMensagem: ${msg}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    this.submitted.set(true);
  }
}
