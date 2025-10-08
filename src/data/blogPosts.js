export const blogPosts = [
  {
    id: 1,
    title: "love and the brain",
    excerpt: "The neuroscience of connection",
    content: `
      <p>What happens in our brains when we fall in love? The science behind attraction is more complex than we think.</p>
      
      <p>Dopamine floods our system, creating that euphoric feeling. But it's not just chemicals—it's about connection, understanding, and the beautiful complexity of human relationships.</p>
      
      <p>Sometimes the most profound connections happen in the quietest moments. A shared glance, a knowing smile, the way someone's eyes light up when they talk about their passions.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-15",
    readTime: "2 min read",
    category: "thoughts",
    tags: ["love", "neuroscience", "connection"],
    featured: true,
    image: "/images/blog/restaurant-woman.jpg",
    alt: "Woman at restaurant with wine bottles in background, enjoying a cocktail",
    gridSize: "medium",
    blockType: "text-only"
  },
  {
    id: 2,
    title: "first car of the train",
    excerpt: "Starting journeys, one step at a time",
    content: `
      <p>Every journey begins with a single step. Every train ride starts with the first car.</p>
      
      <p>There's something beautiful about beginnings. The anticipation, the unknown, the possibility of what lies ahead.</p>
      
      <p>Whether it's a new project, a new relationship, or a new adventure, that first step is always the hardest—and the most important.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-12",
    readTime: "1 min read",
    category: "thoughts",
    tags: ["journey", "beginnings", "travel"],
    featured: false,
    image: "/images/blog/nature-scene-2.jpg",
    alt: "Beautiful nature scene with organic elements and natural composition",
    gridSize: "small",
    blockType: "image-only"
  },
  {
    id: 3,
    title: "tea at a temple",
    excerpt: "Finding peace in ancient rituals",
    content: `
      <p>In the quiet serenity of a temple, a simple tea ceremony can become a profound experience.</p>
      
      <p>The gentle steam, the earthy aroma, the warmth of the cup in your hands—each element invites mindfulness, a moment to pause and simply be.</p>
      
      <p>It's a reminder that even in our fast-paced lives, there are ancient rituals that can ground us, connecting us to a deeper sense of peace and tradition.</p>
      
      <p>Sometimes the simplest moments hold the most profound wisdom.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-10",
    readTime: "2 min read",
    category: "personal",
    tags: ["mindfulness", "ritual", "peace"],
    featured: false,
    image: "/images/blog/contemplative-man.jpg",
    alt: "Contemplative man in thoughtful pose, hands clasped",
    gridSize: "small",
    blockType: "accent"
  },
  {
    id: 4,
    title: "we need a partner who",
    excerpt: "The qualities that truly matter",
    content: `
      <p>We need a partner who sees us—really sees us. Not the version we present to the world, but the messy, complicated, beautifully human version underneath.</p>
      
      <p>Someone who celebrates our victories and holds us through our defeats. Who challenges us to grow but loves us as we are.</p>
      
      <p>Someone who makes us laugh until our stomachs hurt and who sits with us in comfortable silence.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-08",
    readTime: "2 min read",
    category: "thoughts",
    tags: ["relationships", "love", "partnership"],
    featured: false,
    image: "/images/blog/lifestyle-scene.jpg",
    alt: "Lifestyle scene with modern elements and contemporary atmosphere",
    gridSize: "medium",
    blockType: "image-only"
  },
  {
    id: 5,
    title: "making a rocket",
    excerpt: "Building dreams, one piece at a time",
    content: `
      <p>The dream of building a rocket, of reaching for the stars, is a powerful metaphor for any ambitious project.</p>
      
      <p>It starts with a spark of an idea, a blueprint, a vision. Then comes the meticulous planning, the countless hours of design, the trial and error.</p>
      
      <p>Each component, no matter how small, plays a crucial role. Each failure is a lesson learned, bringing you closer to success.</p>
      
      <p>And when it finally launches, when your creation soars, the feeling of accomplishment is unparalleled. It's a testament to perseverance, innovation, and the human spirit.</p>
    `,
    author: "Thu Ngo",
    date: "2024-01-05",
    readTime: "2 min read",
    category: "learning",
    tags: ["dreams", "building", "persistence"],
    featured: true,
    image: "/images/blog/restaurant-woman.jpg",
    alt: "Woman at restaurant with wine bottles in background, enjoying a cocktail",
    gridSize: "small",
    blockType: "text-only"
  }
];

export const categories = [
  "all",
  "thoughts",
  "learning",
  "personal",
  "wisdom",
  "philosophy",
  "travel",
  "nature"
];

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};