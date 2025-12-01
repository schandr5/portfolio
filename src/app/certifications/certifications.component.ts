import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements OnInit {
  constants = AppConstants;
  t: any = {};

  constructor(
    private translationService: TranslationService,
    private sanitizer: DomSanitizer
  ) {}

  formatSkillText(text: string): SafeHtml {
    // Replace **text** with <strong>text</strong>
    const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        title: this.translationService.get('certifications.title'),
        latest: this.translationService.get('certifications.latest'),
        verifyCertificate: this.translationService.get('certifications.verifyCertificate')
      };
    });
  }
  certifications = [
    {
      title: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI & Amazon Web Services',
      platform: 'Coursera',
      date: 'Nov 21, 2025',
      verificationUrl: 'https://coursera.org/verify/UUBG52JCWQ28',
      description: 'Comprehensive course covering generative AI, large language models, and their practical applications',
      skills: ['Generative AI', 'LLMs', 'AWS', 'Machine Learning', 'Deep Learning'],
      learningSummary: {
        overview: 'I completed the "Generative AI with Large Language Models" course by DeepLearning.AI & AWS, where I gained hands-on experience building, tuning, and deploying LLM-powered applications. I learned the full LLM project lifecycle — from data preparation and model selection to evaluation, optimization, and real-world deployment.',
        keySkills: [
          'Understanding and explaining the transformer architecture and how LLMs are trained',
          'Fine-tuning models using techniques like PEFT, LoRA, RLHF, RLAIF, and value-head PPO',
          'Applying empirical scaling laws to balance dataset size, compute, and performance',
          'Implementing prompt engineering, ReAct agents, PAL, and responsible AI guardrails',
          'Using Python tools to run, evaluate, and integrate LLMs into practical applications',
          'Understanding model safety, hallucination mitigation, toxicity filtering, and responsible AI principles',
          'Practicing all labs in **AWS SageMaker**, including model training, tuning, inference, and deployment workflows'
        ],
        conclusion: 'This course strengthened my ability to build LLM applications end-to-end and make informed engineering decisions around training, tuning, and deploying generative AI systems.'
      }
    }
  ];
}
