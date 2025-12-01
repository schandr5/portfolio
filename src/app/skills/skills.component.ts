import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { SkillSet } from './skills.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: SkillSet[] = [];
  filteredSkills: SkillSet[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  constants = AppConstants;
  t: any = {};

  constructor(
    private skillsService: SkillsService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
    this.filteredSkills = this.skills;
    this.categories = this.getCategories();
    
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        title: this.translationService.get('skills.title'),
        allSkills: this.translationService.get('skills.allSkills'),
        technologies: this.translationService.get('skills.summary.technologies'),
        categories: this.translationService.get('skills.summary.categories'),
        yearsExperience: this.translationService.get('skills.summary.yearsExperience')
      };
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }
  }

  getCategories(): string[] {
    const categories = [...new Set(this.skills.map(skill => skill.category))];
    return categories;
  }

  getTotalSkills(): number {
    return this.skills.length;
  }

  getCategoriesCount(): number {
    return this.getCategories().length;
  }

  getYearsExperience(): number {
    return AppConstants.EXPERIENCE_YEARS;
  }

  onSkillHover(skill: SkillSet): void {
    // Add any hover effects here if needed
  }

  onSkillLeave(): void {
    // Add any leave effects here if needed
  }
}
