import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { ConnectComponent } from './connect/connect.component';
import { AcademicsComponent } from './academics/academics.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';

export const routes: Routes = [
  {path:'',component:AboutComponent},
  { path:'about',component:AboutComponent},
  { path: 'skills', component:SkillsComponent  },
  { path: 'work', component: WorkComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'connect', component: ConnectComponent },
  {path :'**', component:AboutComponent}
];
