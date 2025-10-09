export const blogPosts = [
  {
    id: 1,
    title: "the bell jar",
    excerpt: "Sylvia Plath and myself",
    content: `
      <p>I got the incredible opportunity to read The bell jar as a sophomore at Reed College, during the gaps in my mornings taking care of flowers and plants at Reed in 2021. Yes, it was a summer job, which I cherish to this day, and quite frankly, I would love to be a farmer in another life. I love spending time physically laboring on nature a little bit too much. Perhaps another story for another day.</p>
      
      <p>I couldn't come back home over that summer, so I decided to get a campus job and read during my spare time. Perhaps the loneliness but forced contentment at the time was enough to enable me to appreciate every single aspect of the book. I have not read it since, but the impression of a perfect work of literary stayed with me ever since. I can only mention The bell jar during my most elated discussions of books I adore. It was the most wondrous portrayal of helpless feelings that are so strong and visceral, yet so essential to being a human, I thought. </p>
      
      <p>What struck me most was the profound significance of being stuck. Esther's paralysis wasn't just mental illness—it was the weight of too many choices, too many expectations, too many versions of herself she was supposed to be. That feeling of being frozen, unable to move forward but unable to go back, resonated so deeply with me, lots of times, between my current 24-year-old self and my 19-year-old one, at the time.</p>
      
        <p><strong><em>But then there were those moments—small, fragile moments—when clarity broke through.</em></strong> When Esther found glimpses of herself beneath all the noise. There's something so beautiful about the joy of figuring it out, even if just for a moment. That brief flash of understanding who you are and what you want, before the world tries to tell you otherwise again.</p>
      
      <p>Later, I found out that Sylvia wrote the book as a semi-autobigraphy, and that she had tried committing suicide many times before successfully doing so at the age of 30. This begs the question that I still don't know the answer for: does art have to be gloomy to be effective? I definitely muse over it several times in my life, and the different answers I have at different stages of my life seem to never be the end of it. I only know that right now, the answer is no, any story filled with emotions, be them happiness or sadness, is artful enough.</p>
      
      <p>Anyhow, The bell jar is a beautiful book and a mesmerizing work of art, and Sylvia Plath is one of my all-time favorite authors. Highly recommend!</p>
    `,
    author: "Thu Ngo",
    date: "2021-10-15",
    readTime: "6 min read",
    category: "thoughts",
    tags: ["reading", "sylvia plath", "books", "emotions"],
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