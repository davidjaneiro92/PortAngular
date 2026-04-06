import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Servico {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-dsdev-servicos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {
  readonly servicos = signal<Servico[]>([
    {
      icon: 'ri-computer-line',
      title: 'Sistemas Web Empresariais',
      description: 'Criamos sistemas administrativos e dashboards personalizados para o controle total das operações da sua empresa',
      features: [
        'Painéis de controle com indicadores do negócio',
        'Gestão de usuários e permissões por setor',
        'Relatórios gerenciais exportáveis',
        'Acesso via navegador sem instalação',
        'Integração com sistemas já existentes'
      ]
    },
    {
      icon: 'ri-database-2-line',
      title: 'ERP Personalizado',
      description: 'Controle financeiro, estoque, vendas e relatórios gerenciais em um único sistema integrado',
      features: [
        'Controle de estoque em tempo real',
        'Fluxo de caixa e contas a pagar/receber',
        'Emissão de notas fiscais integrada',
        'Gestão de compras e fornecedores',
        'Relatórios financeiros e dashboards'
      ]
    },
    {
      icon: 'ri-store-line',
      title: 'PDV para Lojas',
      description: 'Sistema de ponto de venda com controle de caixa, estoque integrado e relatórios de faturamento',
      features: [
        'Abertura e fechamento de caixa',
        'Vendas com múltiplas formas de pagamento',
        'Baixa automática de estoque nas vendas',
        'Cupom fiscal e comprovante de venda',
        'Relatório diário de faturamento'
      ]
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Aplicativos Sob Medida',
      description: 'Aplicativos empresariais para equipes, clientes ou operações internas da sua empresa',
      features: [
        'Aplicativos para Android e iOS',
        'Gestão de tarefas e equipes em campo',
        'Área do cliente para pedidos e acompanhamento',
        'Notificações automáticas e alertas',
        'Integração com o sistema da empresa'
      ]
    },
    {
      icon: 'ri-global-line',
      title: 'Sites Institucionais',
      description: 'Sites profissionais, landing pages e sites comerciais para representar seu negócio online',
      features: [
        'Design profissional e responsivo',
        'Otimizado para aparecer no Google',
        'Formulário de contato e orçamento',
        'Integração com WhatsApp e redes sociais',
        'Velocidade e performance elevadas'
      ]
    },
    {
      icon: 'ri-shopping-cart-2-line',
      title: 'Sites com Pagamento Online',
      description: 'Integração com gateways de pagamento, checkout online e automação de vendas',
      features: [
        'Checkout com PIX, cartão e boleto',
        'Gestão de pedidos e clientes',
        'Controle de estoque integrado',
        'Emissão automática de nota fiscal',
        'Painel de vendas e relatórios'
      ]
    }
  ]);
}
