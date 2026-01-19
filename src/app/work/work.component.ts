import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TranslationService } from '../services/translation.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {
  constants = AppConstants;
  t: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations().subscribe(() => {
      this.t = {
        title: this.translationService.get('work.title'),
        currentRole: this.translationService.get('work.currentRole'),
        keyAchievements: this.translationService.get('work.keyAchievements')
      };
    });
  }
  events = [
    {
      status: 'Full Stack Developer',
      date: 'April 2025 - Current',
      company: 'TriNet',
      icon: 'pi pi-briefcase',
      details: [
        'Design and develop scalable Java Spring Boot microservices for TriNet’s benefits platform, owning API contracts, backend workflows, and integrations with Angular-based client applications.',
        'Lead cross-functional design reviews for benefits and insurance modules, partnering with UI/UX designers and senior engineers to define scalable backend APIs, data models, and frontend integration standards.',
        'Design reusable, responsive Angular components and implement NgRx state management in collaboration with UI/UX designers, optimizing application performance and overall user experience.',
        'Lead and implement integration between Angular modules and Spring Boot APIs across eligibility, configuration, and enrollment workflows, ensuring consistent and reliable data flow across the benefits platform.',
        'Designed and optimized GraphQL queries and mutations within Spring Boot services for benefits modules, implementing caching strategies that improved response times by over 90% and eliminated query over-fetching.'        
      ]
    },
    {
      status: 'Software Engineer',
      date: 'Jan 2022 - Jan 2025',
      company: 'Microsoft',
      icon: 'pi pi-briefcase',
      details: [
        'Developed and enhanced BuildXL using C# and .NET, a build engine application that orchestrates, caches, and executes build tasks at the process level (e.g., compiling, linking, and packaging code into deployable artifacts). Widely utilized by major internal teams at Microsoft, including Office and Windows, to handle large-scale code repositories efficiently.',
        'Enhanced the internal reliability dashboard by capturing critical build metadata such as organization, code repository, and infrastructure, enabling improved analysis and tracking of build failures, while facilitating data collection and generating actionable insights for better decision-making.',
        'Integrated a static-analysis tool, CredentialScanner(CredScan), to detect and redact any sensitive credentials provided to BuildXL, strengthening security and ensuring compliance.',
        'Redesigned the user error display in Azure DevOps (ADO) pipelines for BuildXL, improving readability and debugging of complex errors, which often span multiple lines. This enhancement significantly streamlined the error analysis process for large builds.',
        'Maintained the health of BuildXL repository by refactoring deployment pipelines, upgrading deprecated libraries, and integrating tools like BinSkim for static analysis to detect vulnerabilities in binaries, ensure secure compilation practices, and enhance code security and compliance.',
        'Developed a feature called build process-specific fingerprinting for improved build tracking and efficiency. Previously, fingerprint salting applied to entire builds, requiring all processes to execute, but this feature allows selective execution by salting individual processes, avoiding redundant executions by 60% and leveraging cached results.',
        'Refactored AdoBuildRunner, an entry point tool for launching BuildXL from Azure DevOps pipelines, by introducing unit tests, creating API interaction abstractions, and cleaning up dead code by improving reliability and efficiency, thereby bringing the code coverage up to 50%.',
        'Designed an Azure pipeline template for building and testing Rust projects in Azure DevOps. Implemented features for publishing, executing cargo test, and generating code coverage reports using tools like Nextest and LLVM-Cov.',
        'Improved build pipeline efficiency by refactoring the MetadataCache to integrate with BlobL3 cache infrastructure, reducing unnecessary downloads, re-computations, and optimizing build manifest generation by 25%.',
        'Designed and implemented a feature enabling users to mark specific processes in a build as uncacheable based on their exit codes, ensuring these processes are not cached in subsequent builds, thereby improving build accuracy and customization.',
        'Implemented enhanced error reporting for unauthorized file accesses missed during build retries, enabling accurate tracking and improved debugging of access violations to ensure build reliability and compliance.'
      ]
    },
    {
      status: 'Software Engineer',
      date: 'Dec 2018 - Jan 2022',
      company: 'Staples INC.',
      icon: 'pi pi-briefcase',
      details: [
        'Developed core components of the store-based application Solution Builder, which processes customer orders in Staples retail stores, improving order processing speed by ~25%.',
        'Refactored the application using Java, Angular, TypeScript, and Spring Boot to meet evolving business needs, and designed an interactive web interface with Angular enhancing user experience and reducing page load times by ~30%.',
        'Built backend notification services using Java and Spring MVC to send customer email alerts via SendGrid.',
        'Spearheaded the evaluation and end-to-end integration of the Shutterstock editor into Staples\' retail platform, delivering a new Kiosk Application by defining requirements, creating mockups, building REST APIs in Java/Spring MVC, and developing the Angular based frontend, ultimately reducing customer wait times by ~20%.'
      ]
    },
    {
      status: 'Graduate Teaching Assistant',
      date: 'Aug 2017 - May 2018',
      company: 'George Mason University',
      icon: 'pi pi-briefcase',
      details: [
        'Graded course assignments and presentations of undergraduate students for the courses Systems Engineering Principles and Critical Infrastructure Protection in the Cyber Security Engineering Department.',
        'Held office hours and assisted students to develop solutions to business applications by analyzing problems using Object Oriented Principles through Java.',
        'Provided feedback on students\' performance in research topics like Blockchain Technology, NIST framework, and Net Neutrality.'
      ]
    },
    {
      status: 'Graduate Research Assistant',
      date: 'Mar 2017 - Apr 2018',
      company: 'Krasnow Institute for Advanced Study',
      icon: 'pi pi-briefcase',
      details: [
        'Developed a REST API to display data in JSON.',
        'Performed code integration using Subversion (SVN) and provided support in the maintenance of an Ubuntu cloud instance.'
      ]
    }    
  ];
}
