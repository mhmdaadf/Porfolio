const projects = [
  {
    title: 'Billing API Platform',
    problem:
      'Manual invoicing caused delayed payouts and frequent reconciliation mistakes for a logistics startup.',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    achievements: [
      'Designed modular architecture with domain-driven service boundaries.',
      'Reduced invoice processing latency by 43% using queue-based workers.',
      'Implemented role-based access and audit trails for finance operations.'
    ],
    github: 'https://github.com/mhmdaadf',
    demo: 'https://example.com'
  },
  {
    title: 'Multi-Tenant Auth Service',
    problem:
      'A SaaS team needed secure tenant isolation and centralized authentication for multiple products.',
    stack: ['NestJS', 'JWT', 'PostgreSQL', 'Prisma'],
    achievements: [
      'Built tenant-aware auth flows with isolated permissions and policy guards.',
      'Added refresh-token rotation and session revocation strategy.',
      'Cut onboarding time for new tenant apps from days to hours.'
    ],
    github: 'https://github.com/mhmdaadf',
    demo: 'https://example.com'
  },
  {
    title: 'Observability Dashboard API',
    problem:
      'Engineering teams lacked real-time visibility into API failures and performance regressions.',
    stack: ['Node.js', 'NestJS', 'TimescaleDB', 'WebSocket'],
    achievements: [
      'Created streaming endpoints for live service health indicators.',
      'Introduced request tracing and SLA alerts for critical routes.',
      'Improved mean time to detection by 55% through structured telemetry.'
    ],
    github: 'https://github.com/mhmdaadf',
    demo: 'https://example.com'
  }
];

export default projects;
