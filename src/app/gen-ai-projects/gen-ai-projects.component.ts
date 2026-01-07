import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-gen-ai-projects',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './gen-ai-projects.component.html',
  styleUrls: ['./gen-ai-projects.component.css']
})
export class GenAiProjectsComponent implements OnInit {
  constants = AppConstants;
  t: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        title: this.translationService.get('genAiProjects.title'),
        latest: this.translationService.get('genAiProjects.latest'),
        projectHighlights: this.translationService.get('genAiProjects.projectHighlights')
      };
    });
  }
  
  projects = [
    {
      title: 'Budget Analyzer',
      date: '2025 (Ongoing)',
      details: [
        'Designed and implemented user authentication and budget setup workflows using Angular integrated with Spring Boot GraphQL APIs.',
        'Developed Spring Boot microservices with MySQL for budget creation, persistence, and analytics via GraphQL endpoints.',
        'Integrated an LLM-based Text-to-SQL pipeline (Ollama + SQLCoder) to translate natural-language budgeting queries into executable SQL.',
        'Engineered prompt templates and safety mechanisms including cached schemas, budget scoping, MySQL-only rules, and invalid query detection to ensure consistent and secure Text-to-SQL generation.',
        'Added automated retry and self-correction workflows and defined reusable insight query templates to deliver reliable, LLM-driven financial analytics.',
        'Building a second stage LLM summarization layer (DeepSeek) to convert SQL outputs into actionable spending insights.',
        'Containerizing the application with Docker, deploy the Angular UI on Vercel and backend on Render with environment-based configuration.'
      ],
      techStack: ['Angular', 'Spring Boot', 'GraphQL', 'SQLCoder', 'Deepseek', 'Gen-AI'],
      githubUrl: 'https://github.com/schandr5'
    }
  ];
}

