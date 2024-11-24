export interface Project {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
  skills: string[];
  imageUrl: string;
}

export interface Language {
  name: string;
  icon: string;
  description: string;
  projects: Project[];
}

export const languages: Language[] = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'A versatile language for web development, both frontend and backend.',
    projects: [
      {
        title: 'Real-time Chat Application',
        description: 'Build a chat app using WebSocket and Node.js',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
        skills: ['WebSocket', 'Node.js', 'Express', 'React'],
        imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Task Management System',
        description: 'Create a Trello-like task management application',
        difficulty: 'Advanced',
        timeEstimate: '3-4 weeks',
        skills: ['React', 'Redux', 'Node.js', 'MongoDB'],
        imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Perfect for data science, AI, and backend development.',
    projects: [
      {
        title: 'Weather Forecast App',
        description: 'Build a weather app using Python and OpenWeatherMap API',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
        skills: ['API Integration', 'Python', 'Flask'],
        imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'AI Image Recognition',
        description: 'Create an image recognition system using TensorFlow',
        difficulty: 'Advanced',
        timeEstimate: '4-6 weeks',
        skills: ['TensorFlow', 'Python', 'Machine Learning'],
        imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'A popular JavaScript library for building user interfaces.',
    projects: [
      {
        title: 'E-commerce Dashboard',
        description: 'Build an admin dashboard for an e-commerce platform',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
        skills: ['React', 'Material-UI', 'Chart.js'],
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Social Media App',
        description: 'Create a social media platform with React',
        difficulty: 'Advanced',
        timeEstimate: '4-6 weeks',
        skills: ['React', 'Firebase', 'Redux'],
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'Server-side JavaScript runtime for building scalable network applications.',
    projects: [
      {
        title: 'REST API Service',
        description: 'Create a RESTful API with authentication and database integration',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
        skills: ['Express.js', 'JWT', 'MongoDB', 'API Design'],
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Microservices Architecture',
        description: 'Build a microservices-based application with message queues',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
        skills: ['Microservices', 'Docker', 'RabbitMQ', 'Redis'],
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    description: 'Progressive JavaScript framework for building user interfaces.',
    projects: [
      {
        title: 'Recipe Sharing Platform',
        description: 'Create a platform for sharing and discovering recipes',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
        skills: ['Vue.js', 'Vuex', 'Firebase'],
        imageUrl: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Real Estate Listing App',
        description: 'Build a property listing and search application',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
        skills: ['Vue.js', 'Node.js', 'PostgreSQL'],
        imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript.',
    projects: [
      {
        title: 'Project Management Tool',
        description: 'Develop a full-stack project management application',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
        skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
        imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Budget Tracking App',
        description: 'Create a personal finance management application',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
        skills: ['TypeScript', 'React', 'Charts', 'Firebase'],
        imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    description: 'Platform for building mobile and desktop web applications.',
    projects: [
      {
        title: 'Video Streaming Platform',
        description: 'Build a YouTube-like video streaming service',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
        skills: ['Angular', 'NgRx', 'Node.js', 'FFmpeg'],
        imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Healthcare Dashboard',
        description: 'Create a medical facility management system',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
        skills: ['Angular', 'RxJS', 'Material Design'],
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Platform for developing, shipping, and running applications in containers.',
    projects: [
      {
        title: 'Microservices Deployment',
        description: 'Set up a containerized microservices architecture',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
        imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Development Environment',
        description: 'Create standardized development environments using Docker',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
        skills: ['Docker Compose', 'Shell Scripting', 'Networking'],
        imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    name: 'AWS',
    icon: 'https://github.com/devicons/devicon/tree/v2.16.0/icons/amazonwebservices/amazonwebservices-original.svg',
    description: 'Comprehensive cloud computing platform with various services.',
    projects: [
      {
        title: 'Serverless API',
        description: 'Build a serverless API using AWS Lambda and API Gateway',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
        skills: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Cloud Storage Solution',
        description: 'Create a scalable file storage system with AWS S3',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
        skills: ['AWS S3', 'CloudFront', 'IAM', 'Lambda'],
        imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  }
];