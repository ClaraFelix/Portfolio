import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { TrainingComponent } from './training/training.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'portfolio-pages',
  templateUrl: './pages.component.html',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExperiencesComponent,
    SkillsComponent,
    TrainingComponent,
    ProjectsComponent,
    ContactComponent,
  ],
})
export class PagesComponent {}
