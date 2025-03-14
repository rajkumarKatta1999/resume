import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('highlightsSection') highlightsSection!: ElementRef;
  personalInfo: any;

  constructor(private resumeDataService: ResumeDataService) {
    this.personalInfo = this.resumeDataService.personalInfo;
  }

  scrollToHighlights(): void {
    if (this.highlightsSection) {
      // Get the element's position relative to the viewport
      const rect = this.highlightsSection.nativeElement.getBoundingClientRect();
      
      // Get the current scroll position
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate the target position (element's position + current scroll)
      const targetPosition = rect.top + currentScroll;
      
      // Scroll with a slower, smoother animation
      this.smoothScrollTo(targetPosition, 1500); // 1500ms duration for slower scroll
    }
  }
  
  private smoothScrollTo(targetPosition: number, duration: number): void {
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
    
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smoother animation
    function easeInOutQuad(t: number, b: number, c: number, d: number): number {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }
}
