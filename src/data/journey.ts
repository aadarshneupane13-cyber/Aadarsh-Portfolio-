import { EducationMilestone } from '../types';

export const journeyMilestones: EducationMilestone[] = [
  {
    id: 'be-it',
    institution: 'BE IT (Information Technology)',
    degree: 'Bachelor of Engineering in Information Technology',
    status: 'CURRENT',
    year: 'Present',
    location: 'Nepal 🇳🇵',
    description: 'Currently pursuing Bachelor of Engineering in Information Technology in Nepal. Deep diving into computer engineering principles, systems architecture, algorithms, AI exploration, and production applications.',
    website: undefined, // Editable when specific university/campus is finalized
    highlights: [
      'Pursuing BE IT engineering curriculum in Nepal',
      'Artificial Intelligence, algorithms & systems design',
      'Production engineering, digital architecture & exploratory tech'
    ]
  },
  {
    id: 'everest-school',
    institution: 'Everest English Boarding Secondary School',
    degree: '+2 Science (Computer Science)',
    status: 'COMPLETED',
    year: '2026',
    location: 'Butwal, Nepal',
    description: 'Completed higher secondary education (+2) in Computer Science. Built foundational mastery in programming, computational mathematics, physics, and logic.',
    website: 'https://www.everest.edu.np/',
    highlights: [
      'Completed +2 Computer Science curriculum',
      'Foundations of C programming, algorithms & database architecture',
      'Active leadership in technology exhibitions and creative student initiatives'
    ]
  },
  {
    id: 'siddhartha-school',
    institution: 'Siddhartha School English Boarding School',
    degree: 'Secondary Education Examination (SEE)',
    status: 'COMPLETED',
    year: '2024',
    location: 'Nepal',
    description: 'Completed secondary schooling (SEE). Formative years sparking a relentless curiosity for computers, science, literature, and hands-on creative experiments.',
    website: 'https://www.sebs.edu.np/',
    highlights: [
      'Completed school / Secondary Education Examination (SEE)',
      'Early exploration of hardware, computing systems, and visual media',
      'Academic distinction and participation in school science exhibitions'
    ]
  }
];
