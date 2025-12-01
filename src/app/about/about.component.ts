import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  imageUrls = './assets/image.jpg';
  constants = AppConstants;
  t: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        currentRole: this.translationService.get('about.currentRole'),
        greeting: this.translationService.get('about.greeting'),
        name: this.translationService.get('about.name'),
        subtitle: this.translationService.get('about.subtitle'),
        description: this.translationService.get('about.description', { years: '6+' }),
        trinet: this.translationService.get('about.experience.trinet'),
        microsoft: this.translationService.get('about.experience.microsoft'),
        staples: this.translationService.get('about.experience.staples'),
        viewWork: this.translationService.get('about.actions.viewWork'),
        getInTouch: this.translationService.get('about.actions.getInTouch'),
        sectionTitle: this.translationService.get('about.section.title'),
        sectionLead: this.translationService.get('about.section.lead'),
        sectionDescription: this.translationService.get('about.section.description'),
        sectionFooter: this.translationService.get('about.section.footer')
      };
    });
  }
}
