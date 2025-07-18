import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {
  academics = [
    {
      title: 'George Mason University, Virginia, USA',
      degree: "Master's in Computer Science",
      date: 'Aug 2016 - May 2018',
      icon: 'pi pi-book'
    },
    {
      title: 'Jawaharlal Nehru Technological University, India',
      degree: "Bachelor's in Computer Science",
      date: 'Jun 2012 - May 2016',
      icon: 'pi pi-book'
    }
  ];
}
