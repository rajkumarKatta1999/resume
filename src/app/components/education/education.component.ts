import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ResumeDataService, Education } from '../../services/resume-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationList: Education[] = [];

  constructor(private resumeDataService: ResumeDataService) {
    this.educationList = this.resumeDataService.education;
  }
}
