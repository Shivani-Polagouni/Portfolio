import { Component, OnInit, AfterViewInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  duration: string;
  icon: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  experiences: Experience[] = [
    {
      company: 'Central Michigan University',
      position: 'Graduate Research Assistant',
      duration: 'Jan 2023 - Dec 2023',
      icon: 'fas fa-university',
      responsibilities: [
        'Analyzed large educational datasets using SQL, Python, and advanced statistical methods to identify trends and insights in student performance',
        'Designed and built interactive dashboards with Tableau and Power BI that visualized key metrics for faculty decision-making',
        'Developed automated data collection and processing workflows that increased report accuracy and reduced manual effort by 70%',
        'Created comprehensive documentation and training materials for data visualization tools used by faculty and staff',
        'Collaborated with professors on research projects involving data mining and predictive analytics for student success initiatives'
      ],
      achievements: [
        'Implemented predictive analytics model that improved early identification of at-risk students by 15%, enabling timely intervention strategies',
        'Developed custom visualization solution that helped faculty identify knowledge gaps in curriculum, leading to targeted course improvements',
        'Created automated grading system that reduced assessment time by 60% while providing more detailed student feedback',
        'Published research findings on educational data mining techniques at university symposium, receiving positive peer reviews'
      ],
      technologies: [
        'SQL', 'Python', 'Power BI', 'Tableau', 'Excel', 'R', 'Data Analysis', 'Data Visualization', 'Statistical Modeling'
      ]
    },
    {
      company: 'Cognizant - Alaska Airlines',
      position: 'Programmer Analyst',
      duration: '2020 - 2023',
      icon: 'fas fa-plane',
      responsibilities: [
        'Designed and implemented high-performance .NET applications handling over 50,000 daily transactions for aircraft maintenance and configuration systems',
        'Developed RESTful APIs and microservices using C# and ASP.NET Core, enabling seamless integration between backend systems and frontend applications',
        'Optimized database queries and procedures for SQL Server, reducing response time by 35% for critical operations',
        'Collaborated with cross-functional teams to gather requirements, design solutions, and implement features that aligned with business objectives',
        'Established robust CI/CD pipelines with automated testing using NUnit, achieving 98% code coverage'
      ],
      achievements: [
        'Successfully migrated legacy systems to cloud-based Azure architecture, reducing infrastructure costs by 30% and system downtime by 40%',
        'Redesigned key maintenance scheduling module, leading to 25% increase in process efficiency and improved resource allocation',
        'Received recognition for excellence in delivering mission-critical features ahead of schedule with zero critical bugs',
        'Implemented performance optimization techniques that reduced page load times by 45% and improved user experience'
      ],
      technologies: [
        'C#', '.NET Core', 'ASP.NET MVC', 'Azure', 'SQL Server', 'Entity Framework', 'NUnit', 'CI/CD', 'RESTful APIs', 'Microservices'
      ]
    },
    {
      company: 'Cognizant',
      position: 'Intern',
      duration: '2019 - 2020',
      icon: 'fas fa-building',
      responsibilities: [
        'Contributed to development of enterprise .NET applications under mentorship of senior developers, focusing on backend functionality',
        'Implemented CRUD operations using C# and SQL Server for data-driven web applications',
        'Assisted in troubleshooting and resolving software bugs, improving application stability and reliability',
        'Participated in code reviews and agile development processes, including daily stand-ups and sprint planning',
        'Created unit tests for existing codebase to improve test coverage and ensure code quality'
      ],
      achievements: [
        'Developed reusable component library that reduced development time for common functionality by 40%',
        'Optimized database queries that improved performance of client-facing dashboard by 30% in load time',
        'Received "Outstanding Intern" recognition for exceptional contributions to team projects',
        'Successfully completed company-wide technical certification program in .NET development with distinction'
      ],
      technologies: [
        'C#', '.NET Framework', 'SQL Server', 'Entity Framework', 'HTML/CSS', 'JavaScript', 'Git', 'Agile Methodology'
      ]
    }
  ];

  selectedTab: number = 0;
  animationTriggered: boolean = true; // Set to true by default to show content immediately
  isInViewport: boolean = false;
  hasAnimatedOnScroll: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Initialize with the first tab selected and animation triggered
    if (this.experiences.length > 0) {
      this.selectedTab = 0;
      this.animationTriggered = true;
    }
  }

  ngAfterViewInit(): void {
    // Only run client-side code when in browser
    if (this.isBrowser) {
      // Check if element is in viewport after view initialization
      setTimeout(() => {
        this.checkIfInViewport();
      }, 500);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isBrowser) {
      this.checkIfInViewport();
    }
  }

  checkIfInViewport() {
    if (!this.isBrowser) return;
    
    const element = document.getElementById('experience');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isInViewport = (
      rect.top <= (window.innerHeight * 0.75) &&
      rect.bottom >= 0
    );

    // Only trigger animation once when scrolling into view
    if (isInViewport && !this.hasAnimatedOnScroll) {
      this.animationTriggered = false;
      setTimeout(() => {
        this.animationTriggered = true;
        this.hasAnimatedOnScroll = true;
      }, 100);
    }
    
    this.isInViewport = isInViewport;
  }

  selectTab(index: number): void {
    if (this.selectedTab !== index) {
      this.animationTriggered = false;
      // Use setTimeout to ensure DOM updates before triggering animation
      setTimeout(() => {
        this.selectedTab = index;
        this.animationTriggered = true;
      }, 10);
    }
  }
}
