import { Injectable, signal } from '@angular/core';
import {
  IProfile,
  IExperience,
  IProject,
  ISkillCategory,
  IContact,
  IFreelancerService,
  IFreelancerDifferential
} from './profile.interfaces';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly profile = signal<IProfile>({
    name: 'David Santos De Santana',
    title: 'Desenvolvedor Full Stack Pleno',
    subtitle: 'C# .NET | Angular | Flutter',
    location: 'São Paulo, Brasil',
    summary: `Transformo desafios em soluções de software funcionais, escaláveis e de alta qualidade. Com quase 5 anos de experiência em desenvolvimento full stack, atuo em projetos web e mobile, utilizando arquiteturas modernas, foco em performance e organização de código.`,
    about: `Desenvolvedor Full Stack Pleno com foco em arquitetura limpa, performance e escalabilidade. Especializado em construir soluções robustas do back-end ao front-end, aplicando princípios SOLID, Clean Architecture e Design Patterns em cada projeto. Minha abordagem combina código modular e reaproveitável com documentação técnica sólida, garantindo que cada entrega seja sustentável a longo prazo. Graduado em Análise e Desenvolvimento de Sistemas pela UNICID, sou movido por inovação e pela busca constante por evolução profissional.`,
    education: 'Análise e Desenvolvimento de Sistemas — UNICID (2019–2021)'
  });

  private readonly experiences = signal<IExperience[]>([
    {
      company: 'Eicon',
      role: 'Desenvolvedor Full Stack Pleno',
      period: 'Out 2025 — Presente',
      location: 'São Paulo, Brasil',
      description: 'Desenvolvimento Full Stack com C# ASP.NET, API REST, Angular, TypeScript, Flutter e Dart. Atuação em projetos corporativos com foco em qualidade, escalabilidade e entrega contínua de valor.',
      stack: ['C#', 'ASP.NET', 'Angular', 'TypeScript', 'Flutter', 'Dart']
    },
    {
      company: 'Keysystems',
      role: 'Desenvolvedor Full Stack Pleno',
      period: 'Abr 2024 — Out 2025',
      location: 'São Paulo, Brasil',
      description: 'Desenvolvimento de aplicações web e mobile com arquiteturas modernas. Back-end com C# .NET, CQRS, MediatR e DDD. Front-end com Angular e PrimeNG. Mobile com Flutter e GetX (MVVM). Integração via Kafka + Debezium (CDC). Deploy com Docker e Kubernetes.',
      stack: ['C#', '.NET Core', 'Angular', 'Flutter', 'Kafka', 'Docker', 'Kubernetes', 'MediatR', 'CQRS']
    },
    {
      company: 'SQG Soluções',
      role: 'Desenvolvedor Full Stack',
      period: 'Abr 2022 — Abr 2024',
      location: 'São Paulo, Brasil',
      description: 'Atuação com C#, API REST, JWT, SQL Server, MySQL. Desenvolvimento de ERP comercial e industrial. Integração de meios de pagamento e suporte a APIs REST com Swagger. Correção de bugs e implementação de melhorias em sistemas gerenciais.',
      stack: ['C#', 'API REST', 'JWT', 'SQL Server', 'MySQL', 'PHP', 'React', 'Laravel']
    },
    {
      company: 'Onnee',
      role: 'Desenvolvedor Full Stack / Estagiário TI',
      period: 'Abr 2021 — Abr 2022',
      location: 'São Paulo, Brasil',
      description: 'Início da carreira como desenvolvedor. Atuação com ASP.NET, C#, JavaScript, jQuery, Bootstrap, SQL Server, Angular e TypeScript. Evolução de estagiário a desenvolvedor full stack em menos de um ano.',
      stack: ['ASP.NET', 'C#', 'JavaScript', 'jQuery', 'Angular', 'SQL Server']
    }
  ]);

  private readonly skills = signal<ISkillCategory[]>([
    {
      category: 'Back-end',
      icon: 'ri-server-line',
      items: [
        { name: 'C# / .NET Core', level: 90 },
        { name: 'DDD / Clean Architecture', level: 85 },
        { name: 'CQRS / MediatR', level: 85 },
        { name: 'API REST / JWT', level: 90 },
        { name: 'SOLID / Design Patterns', level: 85 },
        { name: 'Dapper / SQLKata', level: 80 }
      ]
    },
    {
      category: 'Front-end',
      icon: 'ri-layout-line',
      items: [
        { name: 'Angular', level: 88 },
        { name: 'TypeScript', level: 88 },
        { name: 'PrimeNG', level: 80 },
        { name: 'HTML / CSS / SCSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    {
      category: 'Mobile',
      icon: 'ri-smartphone-line',
      items: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'GetX (MVVM)', level: 82 },
        { name: 'Dio / Intl', level: 78 }
      ]
    },
    {
      category: 'Banco de Dados',
      icon: 'ri-database-2-line',
      items: [
        { name: 'MySQL / MariaDB', level: 85 },
        { name: 'SQL Server', level: 82 },
        { name: 'MongoDB', level: 75 },
        { name: 'Transact-SQL', level: 80 }
      ]
    },
    {
      category: 'DevOps & Infra',
      icon: 'ri-cloud-line',
      items: [
        { name: 'Docker', level: 82 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Git', level: 88 },
        { name: 'IIS', level: 78 }
      ]
    }
  ]);

  private readonly projects = signal<IProject[]>([
    {
      title: 'Sistema Corporativo Web & Mobile',
      description: 'Plataforma full stack com Angular no front-end, C# .NET no back-end e Flutter para mobile. Arquitetura DDD com CQRS e MediatR para separação de responsabilidades.',
      stack: ['Angular', 'C# .NET', 'Flutter', 'MediatR', 'CQRS'],
      highlights: ['Clean Architecture', 'DDD', 'SOLID', 'API REST']
    },
    {
      title: 'Microsserviços com Kafka & CDC',
      description: 'Integração entre microsserviços utilizando Apache Kafka como mensageria e Debezium para Change Data Capture em tempo real, garantindo consistência de dados distribuídos.',
      stack: ['Kafka', 'Debezium', 'C# .NET', 'Docker'],
      highlights: ['CDC', 'Event-Driven', 'Mensageria', 'Microsserviços']
    },
    {
      title: 'ERP Comercial & Industrial',
      description: 'Sistema ERP completo com módulos de vendas, estoque e integração com meios de pagamento. Back-end em C# com API REST e autenticação JWT.',
      stack: ['C#', 'API REST', 'JWT', 'SQL Server', 'React'],
      highlights: ['Pagamentos', 'Tributação', 'Multi-módulo', 'Swagger']
    },
    {
      title: 'App Multiplataforma Flutter',
      description: 'Aplicação mobile multiplataforma com Flutter e arquitetura MVVM utilizando GetX para gerenciamento de estado e navegação reativa.',
      stack: ['Flutter', 'Dart', 'GetX', 'Dio'],
      highlights: ['MVVM', 'Reativo', 'Multiplataforma', 'Performance']
    },
    {
      title: 'Orquestração com Docker & K8s',
      description: 'Pipeline de deploy e orquestração de containers com Docker e Kubernetes. Implantação automatizada de APIs e serviços em ambientes escaláveis.',
      stack: ['Docker', 'Kubernetes', 'IIS', 'Git'],
      highlights: ['Containers', 'Orquestração', 'CI/CD', 'Escalabilidade']
    }
  ]);

  private readonly contact = signal<IContact>({
    email: 'davidjaneiro92@gmail.com',
    linkedin: 'https://www.linkedin.com/in/david-santos-de-santana-59a120199',
    location: 'São Paulo, Brasil'
  });

  private readonly freelancerServices = signal<IFreelancerService[]>([
    {
      icon: 'ri-server-line',
      title: 'Desenvolvimento Back-end',
      description: 'APIs REST robustas e escaláveis com C# .NET, seguindo Clean Architecture, DDD e SOLID.',
      features: ['APIs REST com JWT', 'CQRS + MediatR', 'Microsserviços', 'Kafka & Mensageria']
    },
    {
      icon: 'ri-layout-line',
      title: 'Desenvolvimento Front-end',
      description: 'Interfaces modernas e responsivas com Angular e TypeScript, focadas em performance e UX.',
      features: ['Angular + TypeScript', 'Componentes reutilizáveis', 'Lazy Loading', 'Design responsivo']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Desenvolvimento Mobile',
      description: 'Aplicativos multiplataforma com Flutter, arquitetura MVVM e experiência nativa.',
      features: ['Flutter + Dart', 'Arquitetura MVVM', 'GetX State Management', 'Apps iOS & Android']
    },
    {
      icon: 'ri-cloud-line',
      title: 'DevOps & Infraestrutura',
      description: 'Containerização e orquestração para ambientes escaláveis e confiáveis.',
      features: ['Docker & Kubernetes', 'Deploy automatizado', 'IIS Server', 'CI/CD Pipelines']
    }
  ]);

  private readonly freelancerDifferentials = signal<IFreelancerDifferential[]>([
    {
      icon: 'ri-building-line',
      title: 'Clean Architecture',
      description: 'Código organizado em camadas com separação clara de responsabilidades, facilitando manutenção e evolução do sistema.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'SOLID & Design Patterns',
      description: 'Princípios sólidos de engenharia aplicados em cada projeto, garantindo código flexível e testável.'
    },
    {
      icon: 'ri-speed-line',
      title: 'Performance Real',
      description: 'APIs otimizadas com Dapper e SQLKata, consultas performáticas e arquitetura pensada para escala.'
    },
    {
      icon: 'ri-git-merge-line',
      title: 'Microsserviços & Event-Driven',
      description: 'Experiência real com Kafka, Debezium e CDC para sistemas distribuídos e comunicação assíncrona.'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Full Stack de Verdade',
      description: 'Do banco de dados ao app mobile — C# .NET, Angular e Flutter com domínio real em cada camada.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Entrega com Qualidade',
      description: 'Quase 5 anos entregando software em produção com documentação, testes e boas práticas de Git.'
    }
  ]);

  getProfile() { return this.profile; }
  getExperiences() { return this.experiences; }
  getSkills() { return this.skills; }
  getProjects() { return this.projects; }
  getContact() { return this.contact; }
  getFreelancerServices() { return this.freelancerServices; }
  getFreelancerDifferentials() { return this.freelancerDifferentials; }
}
