import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Integracao {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

@Component({
  selector: 'app-dsdev-integracoes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './integracoes.component.html',
  styleUrl: './integracoes.component.scss'
})
export class IntegracoesComponent {
  readonly integracoes = signal<Integracao[]>([
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp Business',
      description: 'Automatizamos o atendimento e o envio de notificações pelo WhatsApp, reduzindo o trabalho manual da equipe',
      benefits: [
        'Confirmações de pedido automáticas',
        'Notificações de status em tempo real',
        'Respostas automáticas para dúvidas frequentes',
        'Atendimento fora do horário comercial'
      ]
    },
    {
      icon: 'ri-government-line',
      title: 'Receita Federal',
      description: 'Consulta automática de CNPJ, CPF e validações fiscais integradas ao seu sistema',
      benefits: [
        'Consulta de CNPJ e dados empresariais',
        'Validação de CPF de clientes',
        'Preenchimento automático de cadastros',
        'Verificação de situação fiscal'
      ]
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Sistemas de Pagamento',
      description: 'Integramos seu sistema com os principais gateways de pagamento do mercado — PIX, boleto e cartão',
      benefits: [
        'PIX com confirmação automática',
        'Boleto bancário registrado',
        'Cartão de crédito e débito',
        'Conciliação financeira automática'
      ]
    },
    {
      icon: 'ri-git-merge-line',
      title: 'APIs Corporativas',
      description: 'Conectamos seu sistema com ERPs, CRMs e sistemas legados da sua empresa para eliminar retrabalho',
      benefits: [
        'Integração com ERPs existentes',
        'Sincronização com CRM de vendas',
        'Conexão com sistemas legados',
        'Transferência automática de dados'
      ]
    },
    {
      icon: 'ri-robot-line',
      title: 'Automação de Processos',
      description: 'Eliminamos tarefas repetitivas e manuais, liberando sua equipe para atividades de maior valor',
      benefits: [
        'Geração automática de relatórios',
        'Envio de cobranças e lembretes',
        'Atualização de dados entre sistemas',
        'Workflows e aprovações digitais'
      ]
    }
  ]);
}
