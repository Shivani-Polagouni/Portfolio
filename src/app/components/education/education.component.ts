import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  courses?: string[];
  gpa?: string;
  projects?: {
    name: string;
    description: string;
  }[];
  icon: string;
  color: string;
  logo: string;
}

interface Certification {
  name: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

interface Project {
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  color: string;
  icon: string;
  links: {
    demo: string;
    github: string;
  };
  duration: string;
  company: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  selectedProject: Project | null = null;
  educationItems: Education[] = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Central Michigan University',
      location: 'Mount Pleasant, Michigan',
      duration: '2023 - 2025',
      description: 'Focused on advanced computing concepts including cloud computing, data mining, and artificial intelligence. Conducted research on data visualization techniques for educational analytics. Developed a thesis project on improving educational outcomes through machine learning-based recommendation systems.',
      gpa: '3.9/4.0',
      courses: [
        'Advanced Cloud Computing',
        'Data Mining & Machine Learning',
        'Big Data Analytics',
        'Advanced Database Systems',
        'Computational Intelligence',
        'Web Services & Architectures',
        'Neural Networks',
        'Information Visualization'
      ],
      achievements: [
        'Published research on educational data visualization at CMU Symposium',
        'Developed a machine learning-based student performance recommender as thesis',
        'Built interactive dashboards for faculty using React and D3.js',
        'Assisted in teaching Database Systems and Web Development labs',
        'Awarded Graduate Assistantship for academic merit'
      ],
      projects: [
        {
          name: 'Educational Analytics Dashboard',
          description: 'Developed a comprehensive analytics dashboard using React, D3.js and Python to visualize student engagement patterns and learning outcomes.'
        },
        {
          name: 'ML-Based Learning Path Recommender',
          description: 'Created a recommendation system using collaborative filtering algorithms to suggest personalized learning paths for students.'
        }
      ],
      icon: 'fa-graduation-cap',
      color: '#8A74D2',
      logo: 'assets/1.png'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      duration: '2017 - 2021',
      description: 'Comprehensive undergraduate program covering fundamental and advanced concepts in computer science. Focused on software engineering principles, data structures, algorithms, database systems, and web technologies. Specialized in data structures, algorithms and application development.',
      gpa: '8.7/10.0',
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering',
        'Web Technologies',
        'Artificial Intelligence',
        'Mobile Application Development'
      ],
      achievements: [
        'Graduated with Distinction (Top 5% of class)',
        'Led technical club and organized university hackathons',
        'Published paper on secure authentication in university journal',
        'Completed major project on Hospital Management System using Java',
        'Represented college at Smart India Hackathon 2017'
      ],
      projects: [
        {
          name: 'Hospital Management System',
          description: 'Designed and implemented a comprehensive system using Java and MySQL to automate hospital operations including patient management and billing.'
        },
        {
          name: 'Smart City Mobile Application',
          description: 'Developed an Android application for accessing city services, reporting civic issues, and viewing local information using Java and Firebase.'
        }
      ],
      icon: 'fa-university',
      color: '#6C63FF',
      logo: 'assets/2.jpeg'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Basic Python Programming',
      institution: 'University of Michigan',
      location: 'Online Certification',
      duration: '2023',
      description: 'Comprehensive certification covering Python fundamentals, data structures, algorithms, and application development.',
      achievements: [
        'Core Python Concepts',
        'Data Structures',
        'Object-Oriented Programming',
        'Python Applications'
      ],
      icon: 'fa-python',
      color: '#4584b6'
    },
    {
      name: 'AI for Everyone',
      institution: 'University of Michigan (Coursera)',
      location: 'Online Certification',
      duration: '2022',
      description: 'Non-technical course designed to help understand AI technologies, their applications, and how they can be implemented in organizations.',
      achievements: [
        'AI Fundamentals',
        'Machine Learning Concepts',
        'Business Applications',
        'AI Implementation Strategies'
      ],
      icon: 'fa-brain',
      color: '#00A4EF'
    },
    {
      name: 'Python Certified',
      institution: 'Internshala Training',
      location: 'Online Certification',
      duration: '2021',
      description: 'Industry-focused Python training and certification program covering practical applications and development techniques.',
      achievements: [
        'Python Web Development',
        'Data Analysis with Python',
        'Automation Scripts',
        'Real-world Projects'
      ],
      icon: 'fa-code',
      color: '#FFD43B'
    },
    {
      name: 'Microsoft Azure AZ-900',
      institution: 'Microsoft',
      location: 'Online Certification',
      duration: '2022',
      description: 'Microsoft Azure Fundamentals certification validating knowledge of cloud concepts, Azure services, security, privacy, and support.',
      achievements: [
        'Cloud Concepts',
        'Azure Services',
        'Security & Compliance',
        'Azure Pricing & Support'
      ],
      icon: 'fa-cloud',
      color: '#0078D4'
    }
  ];
  
  // Project data from resume
  projects: Project[] = [
    {
      title: 'Personal Portfolio Website',
      summary: 'Modern, responsive portfolio website built with Angular showcasing projects and skills. Features terminal-inspired UI with customizable themes and interactive components.',
      description: 'Designed and developed a modern, responsive portfolio website using Angular, showcasing my projects, skills, and professional experience. Implemented a sleek terminal-inspired UI with a focus on user experience and modern design principles. The site features responsive layouts, interactive components, and a clean, professional aesthetic.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design', 'HTML5'],
      features: [
        'Terminal-inspired UI with animated transitions for a unique user experience',
        'Responsive design that works flawlessly across all device sizes',
        'Project showcase with interactive modal details and features display',
        'Dark/Light theme toggle with persistent user preference',
        'Clean, modern navigation with customized iconography'
      ],
      image: 'assets/shivani.jpg',
      color: '#DD0031', // Angular red
      icon: 'fab fa-angular',
      links: {
        demo: '#',
        github: 'https://github.com/Shivani-Polagouni/portfolio'
      },
      duration: 'May 2025',
      company: 'Personal Project'
    },
    {
      title: 'Smart Recipe Finder (Cook Mate)',
      summary: 'Python-based recipe application that suggests meals based on available ingredients. Features image recognition, meal planning, and personalized recommendations.',
      description: 'Developed a desktop application using Python (Tkinter for UI), MySQL for backend database management, and Pillow for image processing, enabling ingredient-based recipe searches and customized meal recommendations. Ensured system efficiency by optimizing SQL queries, leveraging open-source technologies, and designing a cost-effective architecture with scalable revenue model.',
      technologies: ['Python', 'Tkinter', 'MySQL', 'Pillow', 'SQL Optimization'],
      features: [
        'Ingredient-based recipe search engine that suggests recipes based on available ingredients',
        'Personalized meal recommendations based on user preferences and dietary restrictions',
        'Image recognition for identifying ingredients from photos',
        'Recipe rating and review system with user feedback integration',
        'Meal planning calendar with nutritional information calculation'
      ],
      image: 'assets/shivani.jpg',
      color: '#4CAF50',
      icon: 'fas fa-utensils',
      links: {
        demo: '#',
        github: '#'
      },
      duration: 'Aug 2023',
      company: 'Central Michigan University'
    },
    {
      title: 'Aircraft Configuration System',
      summary: '.NET-based manufacturing system for Alaska Airlines handling high-volume transactions. Reduced downtime by 40% with scalable APIs and Azure cloud services.',
      description: 'Collaborated with the backend development team for Alaska Airlines, working in the Aircraft Configuration & Manufacturing domain to develop and maintain .NET-based applications, handling high-volume transactions. Engineered backend solutions including scalable RESTful APIs and cloud-based applications using Azure App Services, improving system performance and reducing downtime by 40%.',
      technologies: ['C#', '.NET Core', 'Azure', 'RESTful APIs', 'SQL Server'],
      features: [
        'Comprehensive aircraft component tracking system with real-time updates',
        'Manufacturing process automation reducing manual data entry by 60%',
        'Advanced analytics dashboard for monitoring maintenance schedules',
        'Integration with legacy systems using custom API adapters',
        'High-performance database architecture supporting 50,000+ daily transactions'
      ],
      image: 'assets/shivani.jpg',
      color: '#2196F3',
      icon: 'fas fa-plane',
      links: {
        demo: '#',
        github: '#'
      },
      duration: '2020-2023',
      company: 'Cognizant - Alaska Airlines'
    },
    {
      title: 'ML Vulnerability Detection',
      summary: 'ML-based security tool detecting CSRF vulnerabilities with 92% accuracy. Used Python, TensorFlow, and Scikit-Learn with CI/CD pipeline integration.',
      description: 'Developed and implemented ML models using Python, Scikit-Learn, and TensorFlow, leveraging algorithms like Random Forest, SVM, and Neural Networks to enhance the accuracy and efficiency of detecting Cross-Site Request Forgery (CSRF) vulnerabilities. Documented methodologies and presented findings to stakeholders, utilizing data preprocessing techniques, feature engineering, and model evaluation metrics.',
      technologies: ['Python', 'Scikit-Learn', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
      features: [
        'Automated detection of CSRF vulnerabilities with 92% accuracy',
        'Real-time scanning of web applications for security flaws',
        'Adaptive learning system that improves detection over time',
        'Comprehensive vulnerability reporting with severity classification',
        'Integration with CI/CD pipelines for continuous security testing'
      ],
      image: 'assets/shivani.jpg',
      color: '#673AB7',
      icon: 'fas fa-shield-alt',
      links: {
        demo: '#',
        github: '#'
      },
      duration: '2019-2020',
      company: 'Internship - JNTU'
    }
  ];
  
  // Close project modal
  closeProject() {
    this.selectedProject = null;
  }
}
