const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'CSS',
  'html',
  'Tailwind',
  'Node.js',
  'Express.js',
  'Java',
  'SQL',
  'MongoDB',
  'Machine Learning',
  'Firebase',
  'Linux',
  'wordPress',
  'Git',
  'Teamwork',
];

const PROJECTS = [
  {
    id: 0,
    title: 'Agro-Tech',
    subtitle:
      'The unique online Agriculture webapp allows farmer to sell there product in reasonable price also helps buyers to buy product directly from farmers flied.',
    stack: ['html', 'css', 'Js', 'Nodejs', 'Mysql'],
    github: 'https://github.com/',
    link: 'https://',
  },
  {
    id: 1,
    title: 'Diesease Prediction ',
    subtitle:
      'An application that allows Patients or Users to predict their diesease in advance .',
    stack: ['Python', 'Streamlit', 'Anaconda', 'jupiter'],
    github: 'https://github.com',
    link: 'https://vivercel.p',
  },
  {
    id: 2,
    title: 'Potato diesease prediction',
    subtitle:
      'This Web application allows farmers and gardeners to predict the plant diesease from .',
    stack: ['Python', 'Streamlit', 'Anaconda', 'jupiter'],
    github: 'https://github.com',
    link: 'https://dvercel.app/',
  },
  {
    id: 3,
    title: 'Project',
    subtitle:
      'Coming soon.',
    stack: ['React.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com',
    link: 'https://vercel.app/',
  },
  {
    id: 4,
    title: 'Project',
    subtitle:
      'Coming soon.',
    stack: ['React.js', 'TypeScript'],
    github: 'https://github.com',
    link: 'https://github.com',
  },
  {
    id: 5,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['React.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com',
    link: 'https://vercel.app/',
  },
  {
    id: 6,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['React.js', 'TypeScript'],
    github: 'https://github.com',
    link: 'https://github.com',
  },
  {
    id: 7,
    title: 'Project',
    subtitle:
      'Coming Soon .',
    stack: ['React.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com',
    link: 'https://mov',
  },
  {
    id: 8,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['React.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com',
    link: 'https://arte',
  },
  {
    id: 9,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['JavaScript', 'CSS'],
    github: 'https://github.com',
    link: 'https://',
  },
  {
    id: 10,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['React.js', 'CSS'],
    github: 'https://github.com',
    link: 'https://',
  },
  {
    id: 11,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['React js',],
    github: 'https://github.com',
    link: 'https://github.c',
  },
  {
    id: 12,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['React.js', 'CSS'],
    github: 'https://github.',
    link: 'https://a',
  },
  {
    id: 13,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://',
    link: 'https://',
  },
  {
    id: 14,
    title: 'Project',
    subtitle:
      'Coming Soon.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https:/',
    link: 'https:/',
  },
  {
    id: 15,
    title: 'Project',
    subtitle:
      'Web page describing various learning strategies, from experts such as Barbara Oakley, Feynman and Josh Kaufman.',
    stack: ['HTML', 'CSS', 'Javascript', 'BEM'],
    github: 'http',
    link: 'https:/n',
  },
  {
    id: 16,
    title: 'Project',
    subtitle:
      'A simple online console written as an exercise to learn React.js with styled-components library.',
    stack: ['React.js', 'CSS', 'styled-components'],
    github: 'https://',
    link: 'https://',
  },
  {
    id: 17,
    title: 'Project',
    subtitle: 'A simple XO game written as an exercise to learn React.js.',
    stack: ['React.js', 'CSS'],
    github: 'https://github.com',
    link: 'https://github.com',
  },

  {
    id: 18,
    title: 'Project',
    subtitle:
      'Getting started with Vue.js application that helps you find What To Watch When You Don`t Know What To Watch.',
    stack: ['Vue.js', 'CSS', 'REST API'],
    github: 'https://github.com',
    link: 'https://',
  },
  {
    id: 19,
    title: 'Project',
    subtitle:
      'A Stardew Valley style game. This includes farming, a day and night cycle, weather effects and a merchant.',
    stack: ['Python', 'Pygame', 'Tiled'],
    github: 'https://github.com',
    link: 'https://github.com',
  },
  {
    id: 20,
    title: 'Project',
    subtitle:
      'A Zelda style game. This includes weapons and enemies, a magic and spells, upgrades and a sound effects.',
    stack: ['Python', 'Pygame', 'Tiled'],
    github: 'https://github.com',
    link: 'https://github.com',
  },
  {
    id: 21,
    title: 'Project',
    subtitle:
      'Variety of The Game of Life, also known simply as Life, is a cellular automaton.',
    stack: ['Python', 'Pygame'],
    github: 'https://github.com',
    link: 'https://github.com',
  },
];

const CARD_COUNT = {
  SMALL_DEVICE: {
    ADD: 3,
    START: 3,
  },
  MIDDLE_DEVICE: {
    ADD: 2,
    START: 4,
  },
  BIG_DEVICE: {
    ADD: 3,
    START: 6,
  },
};

const CARD_BREAKPOINT = {
  TWO: 1000,
  ONE: 700,
};

export { CARD_BREAKPOINT, CARD_COUNT, PROJECTS, SKILLS };
