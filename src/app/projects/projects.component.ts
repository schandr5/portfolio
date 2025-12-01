import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constants = AppConstants;
  t: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        title: this.translationService.get('projects.title'),
        latest: this.translationService.get('projects.latest'),
        projectHighlights: this.translationService.get('projects.projectHighlights')
      };
    });
  }
  projects = [
    {
      title: 'Budget Analyzer',
      date: '2025 (Ongoing)',
      details: [
        'Building a comprehensive full-stack budget management application with Angular frontend and Spring Boot backend, featuring secure user authentication and GraphQL API integration.',
        'Implementing intelligent expense tracking with 30-day transaction history, budget allocation management, and AI-powered spending insights using Gen-AI integration.',
        'Designing and developing a complete database schema with User, Transaction, and Budget entities, including budget modification history tracking with active/inactive flags.',
        'Creating responsive UI with multiple user flows: registration, login, budget setup, transaction tracking, and AI-powered budget analysis with personalized recommendations.',
        'Developing robust Spring Boot backend with GraphQL API, secure authentication system, and comprehensive database design with proper foreign key relationships and data integrity constraints.',
        'Integrating GraphQL for efficient data fetching and implementing secure user session management with proper authentication and authorization flows.'
      ]
    },
    {
      title: 'About This Website',
      date: '2025',
      details: [
        'Developed this portfolio website using Angular 17.',
        'Implemented key Angular concepts such as components, services, routing, dependency injection, and reactive forms.',
        'Deployed the website on Amazon S3 for hosting, ensuring fast performance and easy access.'
      ]
    },
    {
      title: 'Recipe Book and Shopping List App',
      date: 'March 2018 - April 2018, GMU',
      details: [
        'Designed a web application using TypeScript for Angular 6.',
        'Created reusable, testable modules and components which use and extend the core elements of Angular 6.',
        'Implemented Angular directives, services, controllers and developed unit test for Angular 6.'
      ]
    },
    {
      title: 'National Parks Project',
      date: 'Sept 2017 - Oct 2017, GMU',
      details: [
        'Created the web application using Express framework for Node.js.',
        'Designed the web page using HTML, CSS, Bootstrap.',
        'Implemented MongoDB to store and retrieve the list of national parks.'
      ]
    },
    {
      title: "CS Department Student's Survey Page",
      date: 'Jan 2017 - May 2017, GMU',
      details: [
        'Created a CS department web page including a survey form using HTML and CSS, JavaScript.',
        'Enhanced the functionality of the page using AJAX, JSON to populate some fields of the application and implemented session management using cookies and servlets.',
        'Developed a tooltip using JQuery for the webpage to implement event handling and tabs views.'
      ]
    },
    {
      title: 'Supply Chain Information System',
      date: 'Jan 2017 - May 2017, GMU',
      details: [
        'Defined the requirements of the system, implemented the database design specifications.',
        'Created an ER diagram by enforcing integrity constraints, implemented views and generated tables using SQL by materializing the views.',
        'Developed triggers and procedures to ensure the integrity of the database information.'
      ]
    },
    {
      title: 'Student Survey Application on AWS',
      date: 'Aug 2016 - Dec 2016, GMU',
      details: [
        'Created an MVC based web application using JSF2 framework and implemented database access logic to store, retrieve and delete the data using JPA and Amazon RDS.',
        'Extended the application using Prime Faces, AJAX and RESTful Web Services to enhance the user experience.',
        'Deployed the application using Amazon EC2 and S3 interface.'
      ]
    }
  ];
}
