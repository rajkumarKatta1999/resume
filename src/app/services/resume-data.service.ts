import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  level?: number; // Optional level for skill visualization (1-100)
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  percentage: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  private _personalInfo = {
    name: 'Rajkumar Katta',
    title: 'Full Stack Developer',
    introduction: 'Experienced Full Stack Developer with 3 plus years of expertise in Java, Spring Boot, Angular, and React.',
    about: 'I am a Full Stack Developer with experience in building and maintaining web applications. I specialize in Java, Spring Boot, Angular, and React to develop responsive and user-friendly applications.'
  };

  private _primarySkills: Skill[] = [
    { name: 'Spring Boot', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Angular', level: 85 },
    { name: 'Java', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'Angular CLI', level: 85 },
    { name: 'Angular Material', level: 80 },
    { name: 'RxJS', level: 75 },
    { name: 'REST APIs', level: 90 },
    { name: 'Git', level: 85 },
    { name: 'NPM', level: 80 },
    { name: 'Agile Development', level: 85 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Testing & Debugging', level: 80 }
  ];

  private _secondarySkills: Skill[] = [
    { name: 'Python', level: 60 },
    { name: 'Manual Testing', level: 70 },
    { name: 'Generative AI & Prompt Engineering', level: 65 }
  ];

  private _experience: Experience[] = [
    {
      company: 'Tata Consultancy Services (TCS), Pune',
      role: 'Full Stack Developer',
      duration: 'May 2022 – Present',
      responsibilities: [
        'Built interactive web applications using Spring Boot, React, Angular, JavaScript, HTML, and CSS.',
        'Translated design concepts into maintainable, efficient code for seamless user experiences.'
      ]
    }
  ];

  private _projects: Project[] = [
    {
      name: 'Contract Management Assistant (TCS Internal Project)',
      duration: '2023 – Present',
      description: [
        'Developed dynamic web pages using Angular, TypeScript, HTML, and CSS.',
        'Built CRUD APIs using Java & Spring Boot.',
        'Implemented Internationalization for multi-language support.'
      ]
    },
    {
      name: 'Simplii Financial (CIBC)',
      duration: '2022',
      description: [
        'Reskinned webpages using React JS, JavaScript, HTML, and CSS.',
        'Enhanced UI/UX consistency and brand alignment.',
        'Built CRUD APIs using Java & Spring Boot.'
      ]
    }
  ];

  private _education: Education[] = [
    {
      degree: 'BTech',
      institution: 'Jawaharlal Nehru Technological University Hyderabad',
      year: '2021',
      percentage: '65%'
    },
    {
      degree: '12th',
      institution: 'Narayana Junior College, Hyderabad',
      year: '2012',
      percentage: '95%'
    },
    {
      degree: '10th',
      institution: 'Kakatiya High School, Nizamabad',
      year: '2010',
      percentage: '88%'
    }
  ];

  private _contact: Contact = {
    email: 'rajkumar.katta1920' + '@' + 'gmail.com',
    phone: '7989910395',
    location: 'Pune, India'
  };

  constructor() { }

  get personalInfo() {
    return this._personalInfo;
  }

  get primarySkills() {
    return this._primarySkills;
  }

  get secondarySkills() {
    return this._secondarySkills;
  }

  get experience() {
    return this._experience;
  }

  get projects() {
    return this._projects;
  }

  get education() {
    return this._education;
  }

  get contact() {
    return this._contact;
  }
}
