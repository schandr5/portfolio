import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {
  constants = AppConstants;
  t: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        title: this.translationService.get('academics.title'),
        latest: this.translationService.get('academics.latest'),
        focus: this.translationService.get('academics.focus'),
        keyAchievements: this.translationService.get('academics.keyAchievements')
      };
    });
  }
  academics = [
    {
      title: 'George Mason University',
      degree: "Master's in Computer Science",
      date: 'Aug 2016 - May 2018',
      location: 'Virginia, USA',
      focus: 'Software Engineering & Systems Design',
      icon: 'fas fa-graduation-cap',
      achievements: [
        'Specialized in software engineering principles and system design methodologies',
        'Completed advanced coursework in algorithms, data structures, and software architecture',
        'Gained expertise in object-oriented programming and design patterns',
        'Developed strong foundation in database systems and web technologies',
        'Participated in research projects focusing on software development best practices'
      ]
    },
    {
      title: 'Jawaharlal Nehru Technological University',
      degree: "Bachelor's in Computer Science",
      date: 'Jun 2012 - May 2016',
      location: 'Hyderabad, India',
      focus: 'Computer Science Fundamentals',
      icon: 'fas fa-university',
      achievements: [
        'Strong foundation in computer science fundamentals and programming concepts',
        'Completed comprehensive coursework in mathematics, algorithms, and data structures',
        'Developed proficiency in multiple programming languages including C, C++, and Java',
        'Gained experience in software development lifecycle and project management',
        'Participated in coding competitions and technical symposiums'
      ]
    }
  ];
}
