import { Injectable } from '@angular/core';

export class SkillSet {
  name: string = '';
  category: string = '';
  icon: string = '';
  color: string = '';
  description: string = '';
}

export const skilled: SkillSet[] = [
  // Programming Languages
  { name: 'Java', category: 'Programming Languages', icon: 'fab fa-java', color: '#f89820', description: 'Enterprise application development and Spring framework' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'fab fa-js-square', color: '#3178c6', description: 'Type-safe JavaScript for scalable applications' },
  { name: 'C#', category: 'Programming Languages', icon: 'fas fa-code', color: '#239120', description: 'Object-oriented programming and .NET development' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'fab fa-js-square', color: '#f7df1e', description: 'Dynamic web development and modern ES6+ features' },
  
  // Backend Technologies
  { name: 'Spring Boot', category: 'Backend', icon: 'fas fa-leaf', color: '#6db33f', description: 'Microservices and RESTful API development' },
  { name: 'GraphQL', category: 'Backend', icon: 'fas fa-project-diagram', color: '#e10098', description: 'Flexible API query language and schema design' },
  { name: '.NET', category: 'Backend', icon: 'fab fa-microsoft', color: '#512bd4', description: 'Enterprise-grade application development' },
  { name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js', color: '#339933', description: 'Server-side JavaScript and npm ecosystem' },
  
  // Frontend Technologies
  { name: 'Angular', category: 'Frontend', icon: 'fab fa-angular', color: '#dd0031', description: 'Component-based architecture and reactive programming' },
  { name: 'HTML5', category: 'Frontend', icon: 'fab fa-html5', color: '#e34f26', description: 'Semantic markup and modern web standards' },
  { name: 'CSS', category: 'Frontend', icon: 'fab fa-css3-alt', color: '#1572b6', description: 'Responsive design and modern styling techniques' },
  { name: 'Bootstrap', category: 'Frontend', icon: 'fab fa-bootstrap', color: '#7952b3', description: 'Rapid prototyping and responsive UI components' },
  
  // Databases
  { name: 'MySQL', category: 'Database', icon: 'fas fa-database', color: '#4479a1', description: 'Relational database design and optimization' },
  { name: 'MongoDB', category: 'Database', icon: 'fas fa-database', color: '#47a248', description: 'NoSQL document database and aggregation' },
  
  // Testing & DevOps
  { name: 'Selenium', category: 'Testing & DevOps', icon: 'fas fa-bug', color: '#43b02a', description: 'Automated testing and web application validation' },
  { name: 'XUnit', category: 'Testing & DevOps', icon: 'fas fa-vial', color: '#68217a', description: 'Unit testing framework for .NET applications' },
  { name: 'Azure DevOps', category: 'Testing & DevOps', icon: 'fab fa-microsoft', color: '#0078d4', description: 'CI/CD pipelines and project management' },
  { name: 'YAML', category: 'Testing & DevOps', icon: 'fas fa-file-code', color: '#cb171e', description: 'Configuration management and deployment scripts' },
  
  // APIs & Services
  { name: 'RESTful APIs', category: 'APIs & Services', icon: 'fas fa-cloud', color: '#ff6b6b', description: 'REST architecture and API design principles' },
  { name: 'Gen-AI', category: 'APIs & Services', icon: 'fas fa-robot', color: '#667eea', description: 'AI integration and intelligent application features' }
];

@Injectable({
  providedIn: 'root',  // This makes the service available globally without needing an NgModule
})
export class SkillsService {
  constructor() {}

  getSkills(): SkillSet[] {
    return skilled; // Return the skilled array
  }
}
