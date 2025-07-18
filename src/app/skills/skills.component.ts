import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service'; // Import the SkillsService
import { SkillSet } from './skills.service'; // Import the SkillSet class
import { CommonModule } from '@angular/common';  // Import CommonModule to use *ngFor

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to the imports array
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: SkillSet[] = []; // Declare the skills array

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills(); // Fetch skills from the service
  }
}
