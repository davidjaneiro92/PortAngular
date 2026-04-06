import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Diferencial {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-dsdev-diferenciais',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './diferenciais.component.html',
  styleUrl: './diferenciais.component.scss'
})
export class DiferenciaisComponent {
  readonly diferenciais = signal<Diferencial[]>([
    {
      icon: 'ri-settings-3-line',
      title: 'Soluções Personalizadas',
      description: 'Desenvolvemos sob medida para o seu negócio. Nenhum sistema genérico — tudo pensado para as necessidades reais da sua empresa'
    },
    {
      icon: 'ri-links-line',
      title: 'Integrações Inteligentes',
      description: 'Conectamos sistemas para eliminar retrabalho. Suas plataformas passam a conversar entre si automaticamente'
    },
    {
      icon: 'ri-time-line',
      title: 'Entrega Rápida',
      description: 'Metodologia ágil com entregas parciais para que você acompanhe o progresso e valide cada etapa antes da entrega final'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Suporte Próximo',
      description: 'Acompanhamento pós-implantação com canal direto de atendimento. Não somamos após a entrega — ficamos ao seu lado'
    },
    {
      icon: 'ri-robot-2-line',
      title: 'Automação de Processos',
      description: 'Reduzimos tarefas manuais e repetitivas, liberando sua equipe para focar no que realmente importa para o negócio'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Tecnologia Acessível',
      description: 'Soluções modernas com custo-benefício real. Entregamos tecnologia de alto nível com investimento adequado ao porte da sua empresa'
    }
  ]);
}
