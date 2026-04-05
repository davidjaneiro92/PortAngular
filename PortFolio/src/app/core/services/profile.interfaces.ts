export interface IProfile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  summary: string;
  about: string;
  education: string;
}

export interface IExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
}

export interface ISkillCategory {
  category: string;
  icon: string;
  items: ISkill[];
}

export interface ISkill {
  name: string;
  level: number;
}

export interface IProject {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export interface IContact {
  email: string;
  linkedin: string;
  location: string;
}

export interface IFreelancerService {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface IFreelancerDifferential {
  icon: string;
  title: string;
  description: string;
}

export interface IFreelancerTestimonial {
  name: string;
  role: string;
  text: string;
}
