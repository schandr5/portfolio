import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent implements OnInit {
  constants = AppConstants;
  t: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        title: this.translationService.get('contact.title'),
        choosePreferredWay: this.translationService.get('contact.choosePreferredWay'),
        description: this.translationService.get('contact.description'),
        emailLabel: this.translationService.get('contact.email.label'),
        emailAddress: this.translationService.get('contact.email.address'),
        emailDescription: this.translationService.get('contact.email.description'),
        emailAction: this.translationService.get('contact.email.action'),
        emailPrimary: this.translationService.get('contact.email.primary'),
        linkedinLabel: this.translationService.get('contact.linkedin.label'),
        linkedinAddress: this.translationService.get('contact.linkedin.address'),
        linkedinDescription: this.translationService.get('contact.linkedin.description'),
        linkedinAction: this.translationService.get('contact.linkedin.action'),
        githubLabel: this.translationService.get('contact.github.label'),
        githubAddress: this.translationService.get('contact.github.address'),
        githubDescription: this.translationService.get('contact.github.description'),
        githubAction: this.translationService.get('contact.github.action'),
        statusTitle: this.translationService.get('contact.status.title'),
        statusAvailable: this.translationService.get('contact.status.available'),
        statusDescription: this.translationService.get('contact.status.description'),
        preferencesTitle: this.translationService.get('contact.preferences.title'),
        preferencesFullStack: this.translationService.get('contact.preferences.fullStack'),
        preferencesAiIntegration: this.translationService.get('contact.preferences.aiIntegration'),
        quickActionsTitle: this.translationService.get('contact.quickActions.title'),
        quickActionsEmailMe: this.translationService.get('contact.quickActions.emailMe'),
        quickActionsLinkedin: this.translationService.get('contact.quickActions.linkedin'),
        quickActionsGithub: this.translationService.get('contact.quickActions.github')
      };
    });
  }
}
