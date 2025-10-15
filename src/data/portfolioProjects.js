export const portfolioProjects = [
  {
    id: 1,
    title: "Collaborative Filtering Recommender System",
    excerpt: "Machine learning recommendation engine with REST APIs",
    content: `
      <p>Built a collaborative filtering recommendation engine with REST APIs and asynchronous pipelines using Python and FastAPI.</p>
      
      <p>Implemented matrix factorization with Redis caching to optimize response times and reduce computational overhead, enabling near real-time recommendations for concurrent multi-user requests.</p>
      
      <p>Developed comprehensive unit and integration tests ensuring pipeline reliability and maintainability, achieving 20% improvement in prediction precision.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-15",
    readTime: "3 min read",
    category: "machine-learning",
    tags: ["Python", "FastAPI", "Machine Learning", "Redis"],
    featured: true,
    image: "/images/blog/restaurant-woman.jpg",
    alt: "Machine learning recommendation system architecture",
    gridSize: "medium",
    blockType: "text-only",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/ellango2612",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Love Extension - VSCode Theme & Messaging",
    excerpt: "Custom mauve-themed VS Code extension with timed messaging features",
    content: `
      <p>A VS Code extension that transforms the coding environment with a beautiful mauve color scheme and adds personalized messaging capabilities.</p>
      
      <p>Features custom theme configuration with carefully selected mauve tones and timed messaging functionality for gentle reminders and motivation throughout the workday.</p>
      
      <p>The extension creates a calming and aesthetically pleasing workspace that reduces eye strain during long coding sessions while adding a touch of personality to the development environment.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-12",
    readTime: "2 min read",
    category: "web-development",
    tags: ["TypeScript", "VSCode API", "Theme Customization"],
    featured: false,
    image: "/images/projects/love-extension-screenshot.jpeg",
    alt: "VSCode interface with mauve theme showing README.md file and custom messaging panel",
    gridSize: "small",
    blockType: "image-only",
    technologies: ["TypeScript", "VSCode API", "Node.js", "CSS"],
    githubUrl: "https://github.com/ellango2612/love-extension",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Corgi AI Billing System",
    excerpt: "Scalable recurring billing with Temporal workflows",
    content: `
      <p>Implemented a scalable recurring billing system using Temporal workflows, automating monthly charges for over 5,000 subscribers with 99.9% billing accuracy.</p>
      
      <p>Developed unit and integration tests with JUnit and Mockito, achieving ~90% test coverage and ensuring stability in CI/CD pipelines using GitHub Actions.</p>
      
      <p>Built core backend services in Java enabling secure data ingestion and transformation pipelines, improving system performance through JVM tuning and reducing API response latency by 35%.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-10",
    readTime: "2 min read",
    category: "backend-development",
    tags: ["Java", "Temporal", "Billing System"],
    featured: false,
    image: "/images/blog/contemplative-man.jpg",
    alt: "Billing system architecture with workflow automation",
    gridSize: "small",
    blockType: "accent",
    technologies: ["Java", "Temporal", "JUnit", "GitHub Actions"],
    githubUrl: "https://github.com/ellango2612",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "FinBud Multilingual Platform",
    excerpt: "Full-stack financial education platform with real-time features",
    content: `
      <p>Led a team of 4 on multilingual support, keyword suggestions, and quiz recap features by architecting backend APIs and database models, boosting accessibility and satisfaction by 60%.</p>
      
      <p>Optimized navigation and search with query refactoring and caching, cutting latency by 35% and driving +25% engagement, +30% page visits, and +15% SEO improvements.</p>
      
      <p>Built real-time support plug-in using WebSockets and message queues, improving support accessibility by 35% with automated testing achieving 85% coverage.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-08",
    readTime: "2 min read",
    category: "fullstack-development",
    tags: ["Full Stack", "WebSockets", "Multilingual"],
    featured: false,
    image: "/images/blog/lifestyle-scene.jpg",
    alt: "Financial education platform with multilingual interface",
    gridSize: "medium",
    blockType: "image-only",
    technologies: ["React", "Node.js", "WebSockets", "Jest", "Cypress"],
    githubUrl: "https://github.com/ellango2612",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    excerpt: "React-based personal portfolio with minimalist design",
    content: `
      <p>A thoughtfully designed personal portfolio built with React and Tailwind CSS, featuring a minimalist aesthetic that puts content first.</p>
      
      <p>The platform includes dynamic routing, responsive design, and a clean content management system. Built with performance in mind, using modern React patterns and optimized image loading.</p>
      
      <p>Key features include search functionality, category filtering, and a mobile-first responsive design that works seamlessly across all devices.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-03",
    readTime: "2 min read",
    category: "web-development",
    tags: ["React", "Tailwind CSS", "Portfolio"],
    featured: false,
    image: "/images/blog/contemplative-man.jpg",
    alt: "Clean, modern portfolio website interface",
    gridSize: "small",
    blockType: "accent",
    technologies: ["React", "Tailwind CSS", "JavaScript", "React Router"],
    githubUrl: "https://github.com/ellango2612/ellango2612.github.io",
    liveUrl: "https://ellango2612.github.io"
  },
  {
    id: 6,
    title: "iOS Calculator App",
    excerpt: "Swift-based calculator application",
    content: `
      <p>Built a clean, functional calculator application using Swift and iOS development best practices.</p>
      
      <p>Features include basic arithmetic operations, clear functionality, and a responsive user interface designed with iOS Human Interface Guidelines in mind.</p>
      
      <p>Demonstrates proficiency in Swift programming, iOS development, and mobile app design principles.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-01",
    readTime: "1 min read",
    category: "mobile-development",
    tags: ["Swift", "iOS", "Mobile Development"],
    featured: false,
    image: "/images/blog/lifestyle-scene.jpg",
    alt: "iOS Calculator app interface",
    gridSize: "small",
    blockType: "image-only",
    technologies: ["Swift", "iOS", "Xcode"],
    githubUrl: "https://github.com/ellango2612/calculator",
    liveUrl: "#"
  },
  {
    id: 7,
    title: "RGBullsEye Game",
    excerpt: "Interactive color-matching game in Swift",
    content: `
      <p>Developed an engaging color-matching game using Swift, featuring RGB color theory and interactive gameplay mechanics.</p>
      
      <p>The game challenges players to match target colors by adjusting RGB values, combining education with entertainment.</p>
      
      <p>Built with Swift and SwiftUI, showcasing modern iOS development practices and game design principles.</p>
    `,
    author: "Thu Ngo",
    date: "2023-12-28",
    readTime: "1 min read",
    category: "mobile-development",
    tags: ["Swift", "SwiftUI", "Game Development"],
    featured: false,
    image: "/images/blog/nature-scene-2.jpg",
    alt: "RGBullsEye game interface with colorful gameplay",
    gridSize: "small",
    blockType: "text-only",
    technologies: ["Swift", "SwiftUI", "iOS"],
    githubUrl: "https://github.com/ellango2612/RGBullsEye",
    liveUrl: "#"
  }
];

export const categories = [
  "all",
  "machine-learning",
  "web-development",
  "mobile-development",
  "backend-development",
  "fullstack-development",
  "data-engineering"
];

export const getFeaturedProjects = () => {
  return portfolioProjects.filter(project => project.featured);
};

export const getProjectById = (id) => {
  return portfolioProjects.find(project => project.id === parseInt(id));
};
