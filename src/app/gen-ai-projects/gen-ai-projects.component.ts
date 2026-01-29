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
      title: 'Budget Analyzer — AI-powered Budgeting App (Spring Boot + GraphQL + Angular + Docker + Ollama)',
      oneLiner:
        'A budgeting app that helps users set up budget cycles, track transactions, and turn natural-language questions into spending insights via an Ollama-powered AI pipeline.',
      date: '2025',
      details: [
        'Built a Spring Boot GraphQL API (MySQL) for user + budget setup, budget cycle management, and transaction management (add/fetch, categorize).',
        'Implemented an AI insights GraphQL query (`fetchInsights`) that accepts a natural-language prompt and returns spending insights backed by database queries.',
        'Powered Text-to-SQL via Ollama model `sqlcoder:latest` to generate safe MySQL SELECT queries from user prompts.',
        'Generated short, human-friendly explanations via Ollama model `deepseek-r1:7b` from the SQL result set.',
        'Docker Compose local stack for reproducible setup: MySQL + Ollama + Spring Boot backend.',
        'Delivered a separate Angular UI repo for an end-to-end flow: registration → login → budget/salary setup → transactions → AI insights.'
      ],
      techStack: ['Java', 'Spring Boot', 'GraphQL', 'MySQL', 'Ollama', 'Docker', 'Docker Compose', 'Angular'],
      links: [
        { label: 'Backend repo', url: 'https://github.com/schandr5/budget-analyzer' },
        { label: 'UI repo', url: 'https://github.com/schandr5/budget_analyzer_ui' }
      ],
      images: [
        {
          src: 'assets/ui-login.png',
          alt: 'UI login screen'
        },
        {
          src: 'assets/ui-registration.png',
          alt: 'UI registration screen'
        },
        {
          src: 'assets/ui-budget-setup.png',
          alt: 'UI budget setup screen'
        },
        {
          src: 'assets/ui-budget-modification.png',
          alt: 'UI budget modification screen'
        },
        {
          src: 'assets/ui-transactions.png',
          alt: 'UI transactions screen'
        },
        {
          src: 'assets/ui-ai-insights.png',
          alt: 'UI AI insights screen'
        }
      ]
    }
  ];
}

