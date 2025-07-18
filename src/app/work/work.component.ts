import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  events = [
    {
      status: 'Full Stack Developer',
      date: 'April 2025 - Current',
      company: 'TriNet',
      icon: 'pi pi-briefcase',
      details: [
        'Contribute to the Benefits & Strategic Solutions team at TriNet, focusing on enhancing the internal HR platform that supports employee benefits administration.',
        'Design and implement Angular components to deliver dynamic, role-based benefits experiences, improving usability and interaction across the HR platform.',
        'Build and connect Angular components with Spring Boot APIs to handle dynamic benefits eligibility, employee plan configurations, and rule-based enrollment flows within the HR platform.',
        'Contribute to Agile ceremonies to align with sprint objectives and deepen understanding of benefits compliance workflows and HR platform architecture.',
        'Develop GraphQL queries and mutations in the Spring Boot backend to streamline data retrieval and updates for benefits modules, improving efficiency and reducing over-fetching.'        
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
        'Developed several core components of the store-based application ‘Solution Builder,’ which processes customer orders in Staples retail stores.',
        'Refactored the application using Java, Angular and Spring Boot to meet evolving business needs, and designed an interactive web interface with Angular, HTML5, Bootstrap, and CSS3 to enhance user experience and display dynamic content.',
        'Developed the backend for notifications using Java and Spring MVC to send email notifications to customers via SendGrid.',
        'Designed and implemented Shutterstock editor integration by creating proof of concepts, developing a comprehensive integration plan, and resolving complex technical challenges.',
        'Architected and implemented a new Kiosk application, covering system requirements, mockups, and seamless integration of third-party application (Shutterstock), effectively resolving all related challenges. Created REST API’s using Java with Spring MVC and built the frontend with HTML5, CSS, Angular 12 and Angular Material.',
        'Assisted in designing Selenium test cases for UI testing.',
        'Modified current set of applications based on the business requirements from clients and managed multiple tasks using Jira project management/ticketing tool.',
        'Participated in the complete software life cycle development of the project which includes design, interface implementation, testing, review of the features, training and providing support.'
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
