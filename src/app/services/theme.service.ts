import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.darkThemeSubject.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      // Check if user has a saved preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.darkThemeSubject.next(true);
      }
    }
  }

  toggleTheme(): void {
    const newThemeValue = !this.darkThemeSubject.value;
    this.darkThemeSubject.next(newThemeValue);
    
    if (this.isBrowser) {
      localStorage.setItem('theme', newThemeValue ? 'dark' : 'light');
    }
  }

  setDarkTheme(isDark: boolean): void {
    this.darkThemeSubject.next(isDark);
    
    if (this.isBrowser) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }
}
