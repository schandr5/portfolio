import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslationService } from './services/translation.service';
import { AppConstants } from './constants/app.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgbCollapseModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isCollapsed = true;
  constants = AppConstants;
  t: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        portfolio: this.translationService.get('navigation.portfolio'),
        work: this.translationService.get('navigation.work'),
        projects: this.translationService.get('navigation.projects'),
        genAiProjects: this.translationService.get('navigation.genAiProjects'),
        skills: this.translationService.get('navigation.skills'),
        academics: this.translationService.get('navigation.academics'),
        certifications: this.translationService.get('navigation.certifications'),
        contact: this.translationService.get('navigation.contact')
      };
    });
  }
}
