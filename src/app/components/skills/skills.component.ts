import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
  isOpen: boolean;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: 'fas fa-code',
      isOpen: true,
      skills: [
        'C#', 
        '.NET 7/8', 
        'ASP.NET Core MVC & Web API', 
        'Entity Framework Core', 
        'Python',
        'MySQL',
        'Angular'
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      isOpen: false,
      skills: [
        'Azure App Services', 
        'Azure Functions', 
        'Azure SQL', 
        'GitHub Actions'
      ]
    },
    {
      name: 'Testing & Debugging',
      icon: 'fas fa-bug',
      isOpen: false,
      skills: [
        'NUnit', 
        'Postman'
      ]
    },
    {
      name: 'Other Tools & Methodologies',
      icon: 'fas fa-tools',
      isOpen: false,
      skills: [
        'Git',
        'Azure Repos',
        'CI/CD Pipelines',
        'Agile/Scrum',
        'RESTful APIs',
        'Microservices',
        'Visual Studio'
      ]
    }
  ];
  
  toggleCategory(category: SkillCategory): void {
    category.isOpen = !category.isOpen;
  }
}
