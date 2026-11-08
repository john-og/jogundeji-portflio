export const portfolio = {
  person: {
    name: 'John Ogundeji',
    role: 'Software engineer · product builder',
    email: 'john.j.ogundeji@gmail.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/john-og' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/john-ogundeji' },
    ],
    resume: '/resume.pdf',
  },
  introduction: {
    headline: 'I turn complex systems into products people can rely on.',
    body: 'I work across data models, APIs and interfaces, then stay with the product through performance, release and reliability.',
  },
  selectedWork: [
    {
      id: 'rondo-football',
      name: 'RONDO Football',
      kind: 'Independent project',
      description: 'A community soccer platform for high-intensity pickup games and tournaments. It includes admin tools to manage operations, with live web registration as it grows into a full intramural league.',
      href: 'https://rondofut.com',
      linkLabel: 'Site',
      tags: ['React Native', 'Expo', 'Convex', 'TypeScript'],
    },
  ],
  work: [
    {
      id: 'netflix',
      company: 'Netflix',
      role: 'Software Engineer, Security Platforms Engineering',
      dates: 'Oct 2022 – Present',
      location: 'Los Gatos, California',
      summary: 'Built internal products that turn complex security data into decisions for security teams and leadership, owning features end to end from data model to UI. Took features from idea to polished production experience, keeping them fast and reliable as usage grew, along with the data pipelines behind them. Built the release safety net and AI tooling that let the team ship faster and safer with agent-driven development.',
      highlights: [],
      tags: ['Python', 'TypeScript', 'GraphQL', 'React', 'Druid', 'PySpark'],
    },
    {
      id: 'apple',
      company: 'Apple',
      role: 'Software Engineer Intern, User Study Tools',
      dates: 'Jan 2021 – Apr 2022',
      location: 'Cupertino, California',
      summary: 'I helped the team evolve its internal research tools, shipping product features in the web app while strengthening the shared foundations and test coverage behind it. That gave the team a more reliable base for future changes.',
      highlights: [],
      tags: ['Python', 'Angular', 'Django', 'Pytest'],
    },
    {
      id: 'weather-network',
      company: 'The Weather Network',
      role: 'Software Developer Intern, Internal Tools',
      dates: 'Jan 2020 – Apr 2020',
      location: 'Oakville, Canada',
      summary: 'I built TypeScript microservices and APIs with Firebase and RxJS that helped launch a new consumer notification platform. I also built and deployed a Python tool that converted weather data for a product launch, running on AWS Lambda, ECS, and SQS.',
      highlights: [],
      tags: ['TypeScript', 'Firebase', 'RxJS', 'Python', 'AWS Lambda', 'ECS', 'SQS'],
    },
  ],
  education: [
    {
      institution: 'University of Waterloo',
      degree: 'Bachelor of Computer Science, Honours (co-op)',
      dates: 'September 2017 to August 2022',
    },
    {
      institution: 'Wilfrid Laurier University',
      degree: 'Bachelor of Business Administration, Honours (co-op)',
      dates: 'September 2017 to August 2022',
    },
  ],
  skills: [
    { label: 'Languages', items: ['Python', 'TypeScript / JavaScript', 'GraphQL', 'SQL', 'HTML / CSS'] },
    { label: 'Product & web', items: ['React', 'Playwright', 'Node.js', 'Vite', 'Angular', 'FastAPI', 'Django'] },
    { label: 'Data', items: ['PostgreSQL', 'PySpark', 'Druid', 'SQLAlchemy', 'ETL pipelines', 'Temporal'] },
    { label: 'Delivery', items: ['Docker', 'Spinnaker', 'Jenkins', 'OpenTelemetry', 'GitOps'] },
  ],
} as const;
