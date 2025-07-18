import { Injectable } from '@angular/core';

export class SkillSet {
  name: string = '';  // Default value for 'name'
}

export const skilled: SkillSet[] = [
  { name: 'C#' },
  { name: 'Java' },
  { name: 'TypeScript' },
  { name: 'HTML5' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Web Services (RESTful)' },
  { name: 'Bootstrap' },
  { name: 'Node.js' },
  { name: 'Angular' },
  { name: '.NET' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'Selenium' },
  { name: 'XUnit' },
  { name: 'Azure DevOps' },
  { name: 'YAML' }
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
