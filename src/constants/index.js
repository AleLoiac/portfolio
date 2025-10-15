export const skillsData = [
  {
    title: "Frontend Development",
    description:
      "Coming from a background in architecture and engineering, I bring a strong sense of structure and attention to detail into coding. I focus on building clean, responsive, and performant web applications using modern frontend technologies.",
    items: [
      {
        title: "Core Skills",
        description: "[React, JavaScript, HTML, CSS]",
      },
      {
        title: "Tooling & Workflow",
        description: "[Git, GitHub, Vite, Webpack]",
      },
      {
        title: "Testing",
        description: "[Vitest, Jest]",
      },
    ],
  },
  {
    title: "Database & Backend Knowledge",
    description:
      "Before moving into frontend, I worked for 3 years in IT consulting, mainly on database migration and optimization. This experience gave me a solid understanding of relational databases and data validation.",
    items: [
      {
        title: "Database Languages",
        description: "[SQL, PL/SQL]",
      },
      {
        title: "Migration Software",
        description: "[ODI]",
      },
      {
        title: "Programming",
        description: "[Go, basic backend concepts]",
      },
    ],
  },
  {
    title: "Architecture & Problem-Solving",
    description:
      "My studies and work in architecture and engineering trained me to approach problems with precision and structured thinking. I now apply the same methodical approach to designing scalable and clean code.",
    items: [
      {
        title: "Strengths",
        description:
          "[Analytical mindset, detail-oriented, scalable design thinking]",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Taxi Drink Company Website",
    description: "",
    href: "https://taxi-drink.vercel.app/",
    image: "/assets/projects/taxi_drink_project_image.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind" },
      { id: 3, name: "Gsap" },
    ],
  },
  {
    id: 2,
    name: "Parallax Hero Website",
    description: "",
    href: "https://parallax-component.vercel.app/",
    image: "/assets/projects/parallax_component.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind" },
    ],
  },
  {
    id: 3,
    name: "Zentry Gaming",
    description: "",
    href: "https://zentry-gaming-awwwards.vercel.app/",
    image: "/assets/projects/zentry_gaming.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind" },
      { id: 3, name: "Gsap" },
    ],
  },
  {
    id: 4,
    name: "Knights Travails",
    description:
      "JavaScript project that finds the shortest path a knight can take on a standard 8x8 chessboard from a given starting position to a target position.",
    href: "https://github.com/AleLoiac/knights-travails",
    image: "/assets/projects/knight_project_image.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Javascript" },
      { id: 2, name: "BFS" },
      { id: 3, name: "Graphs" },
    ],
  },
  {
    id: 5,
    name: "Responsive Vanilla Js Homepage",
    description:
      "Responsive homepage built with vanilla JavaScript, featuring smooth lightweight transitions and full accessibility.",
    href: "https://aleloiac.github.io/homepage/",
    image: "/assets/projects/homepage_project_image.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Javascript" },
      { id: 2, name: "Responsive" },
      { id: 3, name: "Accessibility" },
    ],
  },
  {
    id: 6,
    name: "Weather App",
    description: "Weather forecast site based on the Visual Crossing API.",
    href: "https://aleloiac.github.io/weather-app/",
    image: "/assets/projects/weather_app_project_image.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Javascript" },
      { id: 2, name: "APIs" },
    ],
  },
  {
    id: 7,
    name: "Tic Tac Toe",
    description:
      "Basic Tic Tac Toe game used to learn HTML, CSS and Javascript.",
    href: "https://aleloiac.github.io/tic-tac-toe/",
    image: "/assets/projects/tic_tac_toe_project_image.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Javascript" },
    ],
  },
  {
    id: 8,
    name: "Pokémon Memory Game",
    description: "Memory game built using React, find all the pokémon.",
    href: "https://memory-game-ten-theta.vercel.app/",
    image: "/assets/projects/memory_game_project_image.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "APIs" },
    ],
  },
];

export const exampleProjects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

export const socials = [
  // { name: "Instagram", href: "" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alessandro-loiacono-9bb563238",
  },
  { name: "GitHub", href: "https://github.com/AleLoiac" },
];
