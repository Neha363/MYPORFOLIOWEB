export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Algorithms & Systems' | 'Academic';
  description: string;
  detailedDescription: string;
  architecturePoints: string[];
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Core Computer Science' | 'Web Development' | 'Database' | 'Developer Tools' | 'Creative Technologies';
  academicFocus: string;
  badgeType: 'aiml' | 'core' | 'web' | 'tool';
}

export interface EducationItem {
  degree: string;
  field: string;
  year: string;
  status: string;
  institutionNote: string;
  highlights: string[];
  coursework: string[];
}

export interface JourneyMilestone {
  phase: string;
  title: string;
  period: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  summary: string;
  takeaways: string[];
  techTags: string[];
}
