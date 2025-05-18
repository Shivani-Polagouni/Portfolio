import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SkillsComponent, ExperienceComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Shivani Polagouni';
  activeSection = 'home';
  menuOpen = false;
  isDarkTheme = false;
  
  // Image paths
  profileImage = '/assets/image2.jpg';
  
  sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'my-projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
  
  ngOnInit() {
    // Check for saved theme preference
    this.loadThemePreference();
    
    // Handle URL hash for direct navigation (especially for new windows)
    this.handleUrlHash();
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    
    // First close the menu if it's open
    this.menuOpen = false;
    
    // Use a more reliable way to find elements and scroll
    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a slightly longer delay for new windows to ensure everything is loaded
        setTimeout(() => {
          const yOffset = -85;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          
          console.log(`Scrolling to ${sectionId} at position ${y}`);
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }, 300); // Increased timeout for better reliability
      } else {
        console.error(`Element with id "${sectionId}" not found`);
        
        // If we're in a new window and the element isn't found yet, try again
        if (window.location.hash === '#' + sectionId) {
          setTimeout(() => scrollToElement(), 500);
        }
      }
    };
    
    // If the document is still loading (new window scenario)
    if (document.readyState !== 'complete') {
      window.addEventListener('load', scrollToElement);
    } else {
      scrollToElement();
    }
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let currentSection = this.activeSection;
    
    // Detect visible sections
    const found = this.sections.some(section => {
      const element = document.getElementById(section.id);
      if (!element) return false;
      
      const rect = element.getBoundingClientRect();
      // Expanded detection range
      if (rect.top <= 250 && rect.bottom >= 50) {
        currentSection = section.id;
        return true;
      }
      return false;
    });
    
    if (found) {
      this.activeSection = currentSection;
    }
  }
  
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/Polagouni Shivani.pdf';
    link.download = 'Polagouni_Shivani_Resume.pdf';
    link.click();
  }
  
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
  }
  
  private loadThemePreference() {
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'true';
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
    } else {
      // Optional: Check for system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkTheme = prefersDark;
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
    }
  }
  
  // Handle URL hash for direct navigation
  private handleUrlHash() {
    // Wait for everything to load properly
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        // Remove the # character
        const sectionId = hash.substring(1);
        
        // Check if this is a valid section
        const isValidSection = this.sections.some(section => section.id === sectionId);
        
        if (isValidSection) {
          console.log(`Handling URL hash navigation to ${sectionId}`);
          this.scrollToSection(sectionId);
        }
      }
    }, 500); // Reasonable delay for page elements to load
  }
}
