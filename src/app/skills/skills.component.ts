import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { SkillSet } from './skills.service';
import { CommonModule } from '@angular/common';

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

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
    this.filteredSkills = this.skills;
    this.categories = this.getCategories();
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
    return 6; // Based on your work experience
  }

  onSkillHover(skill: SkillSet): void {
    // Add any hover effects here if needed
  }

  onSkillLeave(): void {
    // Add any leave effects here if needed
  }
}
