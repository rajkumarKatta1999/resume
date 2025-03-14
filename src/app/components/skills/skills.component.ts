import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { ResumeDataService, Skill } from '../../services/resume-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  primarySkills: Skill[] = [];
  secondarySkills: Skill[] = [];

  constructor(private resumeDataService: ResumeDataService) {
    this.primarySkills = this.resumeDataService.primarySkills;
    this.secondarySkills = this.resumeDataService.secondarySkills;
  }
}
