import { Injectable } from '@angular/core';

export class SkillSet {
  name: string = '';
  category: string = '';
  icon: string = '';
  color: string = '';
}

export const skilled: SkillSet[] = [
  // Programming Languages
  { name: 'Java', category: 'Programming Languages', icon: 'fab fa-java', color: '#f89820' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'fab fa-js-square', color: '#3178c6' },
  { name: 'C#', category: 'Programming Languages', icon: 'fas fa-code', color: '#239120' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'fab fa-js-square', color: '#f7df1e' },
  
  // Backend Technologies
  { name: 'Spring Boot', category: 'Backend', icon: 'fas fa-leaf', color: '#6db33f' },
  { name: 'GraphQL', category: 'Backend', icon: 'fas fa-project-diagram', color: '#e10098' },
  { name: '.NET', category: 'Backend', icon: 'fab fa-microsoft', color: '#512bd4' },
  { name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js', color: '#339933' },
  
  // Frontend Technologies
  { name: 'Angular', category: 'Frontend', icon: 'fab fa-angular', color: '#dd0031' },
  { name: 'HTML5', category: 'Frontend', icon: 'fab fa-html5', color: '#e34f26' },
  { name: 'CSS', category: 'Frontend', icon: 'fab fa-css3-alt', color: '#1572b6' },
  { name: 'Bootstrap', category: 'Frontend', icon: 'fab fa-bootstrap', color: '#7952b3' },
  
  // Databases
  { name: 'MySQL', category: 'Database', icon: 'fas fa-database', color: '#4479a1' },
  { name: 'MongoDB', category: 'Database', icon: 'fas fa-database', color: '#47a248' },
  
  // Testing & DevOps
  { name: 'Selenium', category: 'Testing & DevOps', icon: 'fas fa-bug', color: '#43b02a' },
  { name: 'XUnit', category: 'Testing & DevOps', icon: 'fas fa-vial', color: '#68217a' },
  { name: 'Azure DevOps', category: 'Testing & DevOps', icon: 'fab fa-microsoft', color: '#0078d4' },
  { name: 'YAML', category: 'Testing & DevOps', icon: 'fas fa-file-code', color: '#cb171e' },
  
  // APIs & Services
  { name: 'RESTful APIs', category: 'APIs & Services', icon: 'fas fa-cloud', color: '#ff6b6b' },
  { name: 'Gen-AI', category: 'APIs & Services', icon: 'fas fa-robot', color: '#667eea' }
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
