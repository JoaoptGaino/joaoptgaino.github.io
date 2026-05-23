import { ExperienceProps } from "@/types";

export const experiences: ExperienceProps[] = [
  {
    companyName: "Itau Unibanco",
    position: "Software Engineer",
    description:
      "Development of BFFs, AWS serverless applications, and secure integrations for corporate banking post-sales systems.",
    responsabilities: [
      "Corporate banking, BFFs, and AWS:",
      "Develop BFFs with Spring Boot and Angular for contract renegotiation eligibility, simulation, and execution workflows.",
      "Modernize core applications on AWS using S3, EC2, Lambda, ECR, and API Gateway to improve scalability, reliability, and operational performance.",
      "Build secure integrations for high-scale financial transactions and corporate banking processes.",
      "Designed and implemented a new AWS serverless application from scratch, covering infrastructure, backend development, deployment, and scalability.",
      "Reduced processing time by 30% while improving service availability for business-critical workflows.",
    ],
    from: "Oct 2024",
    to: "Present",
    skills:
      "Java, Spring Boot, Angular, AWS S3, EC2, Lambda, ECR, API Gateway, Docker, CI/CD, Devin, Codex, Spec Driven Development",
  },
  {
    companyName: "Inmetrics",
    position: "Software Engineer",
    description:
      "Development of marketplace microservices and integrations with Spring Boot, MongoDB, and RabbitMQ.",
    responsabilities: [
      "Marketplace microservices:",
      "Built Spring Boot microservices for Livelo marketplace domains including travel, flights, hotels, vehicles, orders, pricing, inventory, and product catalog.",
      "Developed services with MongoDB and RabbitMQ to support asynchronous processing, marketplace integrations, and high-scale request flows.",
      "Migrated legacy services and improved throughput, reliability, and failure handling across production workloads.",
      "Implemented data quality mechanisms to increase consistency across marketplace and order management processes.",
      "Reduced manual effort by 40% in customer order workflows and supported millions of monthly requests with higher efficiency.",
    ],
    from: "Jun 2022",
    to: "Sep 2024",
    skills:
      "Java, Spring Boot, NodeJS, NestJS, MongoDB, PostgreSQL, RabbitMQ, Redis, Docker, Microservices",
  },
  {
    companyName: "Eureka Labs",
    position: "Junior Software Engineer",
    description:
      "Built ERP and Single Sign-On applications with NestJS, Prisma ORM, JWT, and authorization guards.",
    responsabilities: [
      "ERP and SSO:",
      "Built an ERP system for a large transport company using NestJS, Prisma ORM, and backend services for operational workflows.",
      "Developed corporate Single Sign-On using JWT and authorization guards to centralize and secure authentication.",
      "Aligned authentication flows with enterprise security standards and reduced login-related issues by 50%.",
    ],
    from: "Jan 2021",
    to: "Jun 2022",
    skills:
      "ReactJS, NextJS, NodeJS, FeathersJS, NestJS, PrismaORM, PostgreSQL",
  },
  {
    companyName: "SmarTI Inovacoes",
    position: "Intern Software Engineer",
    description:
      "Developed and maintained web pages using HTML, CSS, JavaScript, PHP, and MySQL.",
    from: "Jan 2020",
    to: "Nov 2020",
    skills: "HTML, CSS, JavaScript, PHP, MySQL, Visual Basic 6",
  },
];
