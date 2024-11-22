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
  }
];