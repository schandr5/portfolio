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
  t: any = {
    title: AppConstants.PAGE_TITLES.GEN_AI_PROJECTS,
    latest: AppConstants.BADGES.LATEST,
    projectHighlights: AppConstants.SECTIONS.PROJECT_HIGHLIGHTS
  };

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      const title = this.translationService.get('genAiProjects.title');
      const latest = this.translationService.get('genAiProjects.latest');
      const projectHighlights = this.translationService.get('genAiProjects.projectHighlights');
      
      // Only update if we got a valid translation (not the key itself)
      if (title && title !== 'genAiProjects.title') {
        this.t.title = title;
      }
      if (latest && latest !== 'genAiProjects.latest') {
        this.t.latest = latest;
      }
      if (projectHighlights && projectHighlights !== 'genAiProjects.projectHighlights') {
        this.t.projectHighlights = projectHighlights;
      }
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

