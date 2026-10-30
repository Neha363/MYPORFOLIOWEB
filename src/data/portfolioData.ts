import { Project, SkillItem, EducationItem, JourneyMilestone } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Neha',
  role: 'Aspiring Software Developer',
  education: 'B.Tech Artificial Intelligence and Machine Learning, 2nd Year',
  status: 'Open to Software Engineering & AI/ML Internships',
  github: 'https://github.com/Neha363',
  linkedin: 'https://linkedin.com/in/neha-aiml',
  email: 'nehametre001@gmail.com',
  location: 'India',
  bioHeadline: "Building My Future Through Code & Creativity.",
  bioDescription: "An AIML engineering student passionate about programming, software development, problem-solving and exploring emerging technologies."
};

// ONLY the 4 featured projects specified by user
export const PROJECTS: Project[] = [
  {
    id: 'graph-editor',
    title: '2D Graph Editor',
    category: 'Algorithms & Systems',
    description: 'An interactive graph visualization and manipulation editor enabling users to plot nodes, connect weighted directed/undirected edges, and inspect algorithmic traversals directly on a 2D canvas.',
    detailedDescription: 'Developed to bridge algorithmic theoretical graph theory and visual intuition. This application allows users to build graph structures dynamically, inspect adjacency representations, and observe step-by-step pathfinding and node discovery behaviors in real time.',
    architecturePoints: [
      'Interactive canvas rendering loop with dynamic node dragging and edge drawing',
      'Adjacency list data model optimized for traversal algorithms',
      'Interactive path highlighting for BFS, DFS, and shortest-path heuristics',
      'Visual control panel displaying real-time node degrees and edge counts'
    ],
    keyFeatures: [
      'Dynamic node placement and interactive coordinate calculation',
      'Directed and undirected edge linking with automatic collision snapping',
      'Canvas state management with undo/clear graph functions',
      'Algorithmic traversal visualizer with step-by-step node state coloring'
    ],
    technologies: ['Python', 'Graph Algorithms', 'Data Structures', 'Canvas UI', 'Algorithms'],
    githubUrl: 'https://github.com/Neha363/2-D_graph_editor',
    image: '/src/assets/images/project_graph_editor_1793348180800.jpg'
  },
  {
    id: 'ipl-ticket-booking',
    title: 'IPL Ticket Booking',
    category: 'Algorithms & Systems',
    description: 'A structured cricket stadium seat reservation and match ticketing system featuring tiered pricing, seat availability tracking, and automated booking calculations.',
    detailedDescription: 'Engineered as a comprehensive software system to model real-world stadium capacity constraints, match scheduling, seat categorisation (Grandstand, Club, Pavilion), and checkout transaction logic for Indian Premier League fixtures.',
    architecturePoints: [
      'Structured relational data mapping for matches, stadiums, and seat matrices',
      'Concurrency-aware seat state flags (Available, Reserved, Booked)',
      'Tiered pricing engine calculating subtotals, convenience fees, and taxes',
      'Modular booking validation routines preventing double-allocation'
    ],
    keyFeatures: [
      'Interactive stadium seating overview with visual tier indicators',
      'Match fixture selection and team-versus-team schedule explorer',
      'Real-time price calculation based on seat tier selection',
      'Booking confirmation summary with unique ticket reference generator'
    ],
    technologies: ['Python', 'Database Design', 'System Architecture', 'UI Design', 'Logic Flow'],
    githubUrl: 'https://github.com/Neha363/IPL--Ticket-Booking',
    image: '/src/assets/images/project_ipl_booking_1793348181460.jpg'
  },
  {
    id: 'gym-membership',
    title: 'Gym Membership Website',
    category: 'Web',
    description: 'A modern, responsive fitness and athletic club web application featuring dynamic membership plan tiers, workout program showcases, and interactive lead conversion forms.',
    detailedDescription: 'Built with modern front-end web engineering practices to deliver a high-energy user experience. Features sleek dark-mode aesthetics, responsive grid layouts across desktop and mobile, trainer profiles, and subscription tier comparison tables.',
    architecturePoints: [
      'Component-driven architecture for rapid reusability and clean layout hierarchy',
      'Fully responsive CSS grid and flexbox layout designed mobile-first',
      'Interactive plan tier selector with feature comparison matrix',
      'Production deployment configured with zero downtime on Vercel'
    ],
    keyFeatures: [
      'Interactive membership tier cards (Basic, Pro, Elite) with feature matrices',
      'Workout program showcases (HIIT, Strength, Functional Training)',
      'Lead capture form with client-side field validation',
      'Optimized asset loading and mobile touch navigation'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Vercel'],
    githubUrl: 'https://github.com/Neha363/gym-memebership-',
    liveUrl: 'https://gym-memebership.vercel.app/',
    image: '/src/assets/images/project_gym_membership_1793348182440.jpg'
  },
  {
    id: 'mini-project',
    title: 'Mini Project',
    category: 'Academic',
    description: 'Academic software engineering project implementing foundational algorithmic workflows, data validation routines, and clean modular code organization.',
    detailedDescription: 'Created as an integral part of B.Tech computer science coursework to demonstrate rigorous modular programming, file handling, algorithmic data structures, and systematic error handling without reliance on heavyweight external frameworks.',
    architecturePoints: [
      'Modular functional decomposition separating logic, data storage, and presentation',
      'File-based data persistence with structured input/output parsing',
      'Defensive programming routines with comprehensive input validation',
      'Clean memory utilization and algorithmic time complexity awareness'
    ],
    keyFeatures: [
      'Structured execution pipeline with interactive command prompts',
      'Data record management (creation, search, update, deletion)',
      'Algorithmic validation and automated format checks',
      'Modular file structure adhering to clean coding conventions'
    ],
    technologies: ['C', 'Python', 'Core CS', 'Data Structures', 'Modular Architecture'],
    githubUrl: 'https://github.com/Neha363/mini_project',
    image: '/src/assets/images/project_mini_project_1793348182350.jpg'
  }
];

// Categorized Skills matching the prompt strictly without fake percentages
export const SKILLS: SkillItem[] = [
  // Programming
  { name: 'C', category: 'Programming', academicFocus: 'Systems fundamentals, pointers, memory model & low-level data structures', badgeType: 'core' },
  { name: 'Python', category: 'Programming', academicFocus: 'Algorithmic scripting, OOP concepts, automation & AI/ML experimentation', badgeType: 'aiml' },

  // Core Computer Science
  { name: 'Data Structures & Algorithms', category: 'Core Computer Science', academicFocus: 'Arrays, Linked Lists, Stacks, Queues, Trees, Sorting & Graph traversals', badgeType: 'core' },
  { name: 'Object-Oriented Programming', category: 'Core Computer Science', academicFocus: 'Encapsulation, inheritance, polymorphism, abstraction & modular system design', badgeType: 'core' },

  // Web Development
  { name: 'HTML5', category: 'Web Development', academicFocus: 'Semantic document hierarchy, accessibility & modern web document standards', badgeType: 'web' },
  { name: 'CSS3', category: 'Web Development', academicFocus: 'Flexbox, CSS Grid, responsive design, animations & modern design systems', badgeType: 'web' },
  { name: 'JavaScript', category: 'Web Development', academicFocus: 'ES6+ syntax, asynchronous programming, DOM manipulation & web APIs', badgeType: 'web' },
  { name: 'React.js', category: 'Web Development', academicFocus: 'Component-driven architecture, state management, hooks & reusable UI workflows', badgeType: 'web' },

  // Database
  { name: 'MySQL', category: 'Database', academicFocus: 'Relational schema design, normalization, joins, indexing & SQL querying', badgeType: 'core' },
  { name: 'Supabase', category: 'Database', academicFocus: 'PostgreSQL-backed serverless databases, realtime subscriptions & auth integrations', badgeType: 'tool' },

  // Developer Tools
  { name: 'Git', category: 'Developer Tools', academicFocus: 'Distributed version control, branching, committing, rebasing & merge workflows', badgeType: 'tool' },
  { name: 'GitHub', category: 'Developer Tools', academicFocus: 'Remote repositories, collaborative open-source workflows & project tracking', badgeType: 'tool' },
  { name: 'VS Code', category: 'Developer Tools', academicFocus: 'Primary development environment with custom tooling, linters & debugging', badgeType: 'tool' },

  // Creative Technologies
  { name: 'UI/UX Design', category: 'Creative Technologies', academicFocus: 'User-centered interface ergonomics, wireframing, typography & visual hierarchy', badgeType: 'aiml' },
  { name: 'Google Stitch', category: 'Creative Technologies', academicFocus: 'Exploring creative tooling for smart prototyping and digital experiences', badgeType: 'aiml' },
  { name: 'Google AI Studio', category: 'Creative Technologies', academicFocus: 'Prototyping generative AI features, prompt engineering & multimodal testing', badgeType: 'aiml' },
  { name: 'AI-Powered Development', category: 'Creative Technologies', academicFocus: 'Leveraging AI tools for accelerated development, code refactoring & ideation', badgeType: 'aiml' },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Artificial Intelligence and Machine Learning',
  year: '2nd Year (Semester 3 & 4)',
  status: 'Currently Pursuing (2024 – 2028 Expected)',
  institutionNote: 'Undergraduate Program in Computer Science & Artificial Intelligence',
  highlights: [
    'Specialized curriculum synthesizing core computer science with modern artificial intelligence foundations',
    'Active participation in coding labs, algorithmic problem-solving sessions, and peer code reviews',
    'Applied project development applying classroom algorithms to interactive software applications',
    'Hands-on laboratory experience with C, Python, database queries, and web technologies'
  ],
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Python for AI & Computing',
    'Database Management Systems',
    'Discrete Mathematics',
    'Linear Algebra for Machine Learning',
    'Computer Organization & Architecture',
    'Operating System Foundations'
  ]
};

export const LEARNING_JOURNEY: JourneyMilestone[] = [
  {
    phase: '01',
    title: 'Foundational Programming & Computational Logic',
    period: 'Year 1 · Semester 1',
    status: 'Completed',
    summary: 'Started the software journey by mastering procedural programming in C and computational thinking in Python. Focused on variable memory models, control flow, loops, and modular function decomposition.',
    takeaways: [
      'Deep appreciation for memory handling and pointer manipulation in C',
      'Rapid problem-solving and clean algorithmic scripting with Python',
      'Fundamental understanding of time and space complexity'
    ],
    techTags: ['C', 'Python', 'Logic Building', 'Computational Thinking']
  },
  {
    phase: '02',
    title: 'Core Computer Science & Data Structures',
    period: 'Year 1 – Year 2 · Semester 2 & 3',
    status: 'Completed',
    summary: 'Dived into classical data structures and object-oriented principles. Implemented linked lists, stacks, queues, trees, and graph algorithms while practicing modular software design.',
    takeaways: [
      'Built a complete 2D Graph Editor to visualize graph traversal and pathfinding algorithms',
      'Deepened comprehension of OOP tenets: encapsulation, abstraction, and polymorphism',
      'Designed relational database schemas and executed SQL queries with MySQL'
    ],
    techTags: ['Data Structures', 'OOP', 'Graph Algorithms', 'MySQL']
  },
  {
    phase: '03',
    title: 'Front-End Web Development & Interactive UI',
    period: 'Year 2 · Semester 3',
    status: 'Completed',
    summary: 'Expanded into modern full-stack web engineering. Learned semantic HTML5, modern CSS styling, JavaScript ES6+, and component-driven UI architecture using React.js.',
    takeaways: [
      'Built and deployed a responsive Gym Membership web application on Vercel',
      'Mastered Git and GitHub collaborative version control workflows',
      'Explored modern UI/UX design principles, responsive grids, and typography systems'
    ],
    techTags: ['HTML5/CSS3', 'JavaScript', 'React.js', 'Git/GitHub', 'Vercel']
  },
  {
    phase: '04',
    title: 'Artificial Intelligence, Emerging Tech & Cloud Tools',
    period: 'Year 2 · Semester 4 (Current Focus)',
    status: 'In Progress',
    summary: 'Currently exploring applied machine learning, mathematical foundations for AI (Linear Algebra, Probability), and next-generation developer tooling including Google AI Studio and Supabase.',
    takeaways: [
      'Hands-on experimentation with Google AI Studio and prompt engineering workflows',
      'Integrating cloud databases and modern backend services like Supabase',
      'Synthesizing software engineering rigor with intelligent AI capabilities'
    ],
    techTags: ['AI/ML Concepts', 'Google AI Studio', 'Google Stitch', 'Supabase', 'AI-Assisted Dev']
  },
  {
    phase: '05',
    title: 'Industry Internships & Production Engineering',
    period: 'Year 2 – Year 3 (Next Horizon)',
    status: 'Upcoming',
    summary: 'Preparing actively for software engineering and AI/ML internship opportunities. Goal is to contribute to production codebases, collaborate with engineering teams, and solve high-impact real-world problems.',
    takeaways: [
      'Building full-stack AI-integrated production applications',
      'Continuous daily problem-solving on data structures and algorithms',
      'Contributing to open-source software and developer communities'
    ],
    techTags: ['Software Engineering', 'Internship Readiness', 'Open Source', 'System Design']
  }
];
