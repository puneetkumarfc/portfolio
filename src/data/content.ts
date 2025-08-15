export interface Technology {
  name: string;
  icon: string;
  description: string;
  examples: string[];
  projectSize: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  tech: string[];
  clientType: string;
  challenge: string;
  solution: string;
  results: string[];
  screenshots: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const technologies = {
  web: [
    {
      name: 'PHP',
      icon: '🔴',
      description: 'Server-side scripting language for web development',
      examples: ['Laravel', 'CodeIgniter', 'WordPress'],
      projectSize: 'Small to Enterprise'
    },
    {
      name: 'Java',
      icon: '☕',
      description: 'Object-oriented programming language for enterprise applications',
      examples: ['Spring Boot', 'Hibernate', 'Maven'],
      projectSize: 'Medium to Enterprise'
    },
    {
      name: 'JavaScript',
      icon: '🟡',
      description: 'Versatile language for frontend and backend development',
      examples: ['React', 'Node.js', 'Express', 'MongoDB'],
      projectSize: 'Small to Large'
    },
    {
      name: 'C#',
      icon: '🟣',
      description: 'Microsoft\'s language for .NET framework applications',
      examples: ['.NET Core', 'ASP.NET', 'Entity Framework'],
      projectSize: 'Medium to Enterprise'
    }
  ],
  mobile: [
    {
      name: 'Ionic',
      icon: '⚡',
      description: 'Cross-platform mobile app development framework',
      examples: ['Angular', 'React', 'Vue.js'],
      projectSize: 'Small to Medium'
    },
    {
      name: 'Flutter',
      icon: '🦋',
      description: 'Google\'s UI toolkit for cross-platform apps',
      examples: ['Dart', 'Material Design', 'Cupertino'],
      projectSize: 'Small to Large'
    },
    {
      name: 'Native Android',
      icon: '🤖',
      description: 'Native Android development with Java/Kotlin',
      examples: ['Kotlin', 'Java', 'Android SDK'],
      projectSize: 'Medium to Large'
    },
    {
      name: 'Native iOS',
      icon: '🍎',
      description: 'Native iOS development with Swift',
      examples: ['Swift', 'SwiftUI', 'UIKit'],
      projectSize: 'Medium to Large'
    }
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced inventory management',
    image: '/projects/ecommerce.jpg',
    year: 2024,
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    clientType: 'Retail',
    challenge: 'Build a scalable e-commerce platform that could handle 10,000+ products and 100,000+ users',
    solution: 'Developed a microservices architecture with React frontend, Node.js backend, and MongoDB database',
    results: [
      '50% increase in conversion rate',
      '99.9% uptime achieved',
      'Reduced page load time by 60%'
    ],
    screenshots: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg', '/projects/ecommerce-3.jpg']
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    description: 'Patient management and appointment scheduling system',
    image: '/projects/healthcare.jpg',
    year: 2024,
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    clientType: 'Healthcare',
    challenge: 'Create a HIPAA-compliant system for managing patient records and appointments',
    solution: 'Built a secure Java-based backend with React frontend and comprehensive audit trails',
    results: [
      'HIPAA compliance achieved',
      '30% reduction in appointment scheduling time',
      'Improved patient satisfaction by 40%'
    ],
    screenshots: ['/projects/healthcare-1.jpg', '/projects/healthcare-2.jpg']
  },
  {
    id: '3',
    title: 'Food Delivery App',
    description: 'Cross-platform mobile app for food delivery service',
    image: '/projects/food-delivery.jpg',
    year: 2023,
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    clientType: 'Food & Beverage',
    challenge: 'Develop a fast, reliable food delivery app for both iOS and Android',
    solution: 'Created a Flutter app with real-time tracking, push notifications, and payment integration',
    results: [
      '4.8/5 app store rating',
      '200,000+ downloads',
      'Average delivery time reduced by 25%'
    ],
    screenshots: ['/projects/food-1.jpg', '/projects/food-2.jpg', '/projects/food-3.jpg']
  },
  {
    id: '4',
    title: 'Banking Dashboard',
    description: 'Real-time financial dashboard for banking operations',
    image: '/projects/banking.jpg',
    year: 2023,
    tech: ['.NET Core', 'C#', 'SQL Server', 'Angular'],
    clientType: 'Finance',
    challenge: 'Build a secure, real-time dashboard for banking operations with complex financial calculations',
    solution: 'Developed a .NET Core backend with Angular frontend and real-time data streaming',
    results: [
      'Real-time data updates achieved',
      'Enhanced security compliance',
      '50% faster transaction processing'
    ],
    screenshots: ['/projects/banking-1.jpg', '/projects/banking-2.jpg']
  },
  {
    id: '5',
    title: 'Educational Platform',
    description: 'Online learning management system with video streaming',
    image: '/projects/education.jpg',
    year: 2023,
    tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
    clientType: 'Education',
    challenge: 'Create an LMS that supports 10,000+ concurrent users with video streaming',
    solution: 'Built a Laravel-based platform with CDN integration and adaptive streaming',
    results: [
      '10,000+ concurrent users supported',
      '95% student satisfaction rate',
      'Reduced server costs by 30%'
    ],
    screenshots: ['/projects/education-1.jpg', '/projects/education-2.jpg', '/projects/education-3.jpg']
  },
  {
    id: '6',
    title: 'Logistics Tracking App',
    description: 'Mobile app for real-time logistics and fleet management',
    image: '/projects/logistics.jpg',
    year: 2022,
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    clientType: 'Logistics',
    challenge: 'Develop a real-time tracking system for 500+ vehicles across multiple countries',
    solution: 'Created a React Native app with real-time GPS tracking and fleet management features',
    results: [
      'Real-time tracking for 500+ vehicles',
      '30% reduction in delivery delays',
      'Improved fuel efficiency by 15%'
    ],
    screenshots: ['/projects/logistics-1.jpg', '/projects/logistics-2.jpg']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    role: 'CTO',
    avatar: '/testimonials/sarah.jpg',
    quote: 'TechFlow delivered our e-commerce platform ahead of schedule and exceeded all expectations. Their attention to detail and technical expertise is outstanding.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'HealthFirst Medical',
    role: 'IT Director',
    avatar: '/testimonials/michael.jpg',
    quote: 'The healthcare management system they built for us is not only HIPAA compliant but also incredibly user-friendly. Our staff productivity has increased significantly.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'FreshBites',
    role: 'Founder & CEO',
    avatar: '/testimonials/emily.jpg',
    quote: 'Our food delivery app has been a game-changer for our business. TechFlow understood our vision perfectly and delivered a beautiful, functional app.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Thompson',
    company: 'Global Bank',
    role: 'Head of Digital',
    avatar: '/testimonials/david.jpg',
    quote: 'The banking dashboard they developed has transformed our operations. Real-time data and security compliance were crucial, and they delivered both perfectly.',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Wang',
    company: 'EduTech Solutions',
    role: 'Product Manager',
    avatar: '/testimonials/lisa.jpg',
    quote: 'Our educational platform now serves thousands of students seamlessly. TechFlow\'s expertise in scalable solutions is remarkable.',
    rating: 5
  }
];

export const stats: Stat[] = [
  {
    label: 'Projects Completed',
    value: '240',
    suffix: '+'
  },
  {
    label: 'Happy Clients',
    value: '120',
    suffix: '+'
  },
  {
    label: 'Years Experience',
    value: '8',
    suffix: '+'
  },
  {
    label: 'Countries Served',
    value: '18',
    suffix: '+'
  }
];

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices',
    icon: '🌐',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation']
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: '📱',
    features: ['Native Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications']
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging and intuitive experiences',
    icon: '🎨',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and automated deployment pipelines',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Container Orchestration', 'Monitoring & Logging']
  },
  {
    title: 'QA & Support',
    description: 'Comprehensive testing and ongoing support for your applications',
    icon: '🔧',
    features: ['Automated Testing', 'Manual Testing', 'Performance Testing', '24/7 Support']
  }
];

export const helloLanguages = [
  { text: 'Hello', lang: 'English' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'Namaste', lang: 'Hindi' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'Hallo', lang: 'German' },
  { text: 'مرحبا', lang: 'Arabic' },
  { text: 'Olá', lang: 'Portuguese' },
  { text: 'Привет', lang: 'Russian' }
];
