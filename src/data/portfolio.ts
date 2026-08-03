import ragImage from "@/assets/project-rag.jpg";
import trackerImage from "@/assets/project-tracker.jpg";

export const profile = {
  name: "Vinay Kumar Mannava",
  role: "Full Stack Software Developer",
  email: "vinay.kmannava@gmail.com",
  phone: "+1 (469) 956-9235",
  linkedin: "https://www.linkedin.com/in/vinaykumar675/",
  github: "",
  summary:
    "Software Developer with 3 years of experience designing, building, and operating robust, performant production services using C#, .NET and Angular on AWS. I care about low-level system design, clean API contracts, solid data modeling, and the CS fundamentals underneath — DSA, object-oriented design, and distributed systems.",
  summary2:
    "I ship reliable, scalable software through code reviews, observability and CI/CD, and I have spent plenty of nights debugging real production incidents. Lately I have been building AI/ML-driven tools and agent workflows and folding them into real products.",
  education: {
    degree: "M.S. in Information Technology & Management",
    school: "University of Texas at Dallas, Dallas, TX",
    years: "2023 – 2024",
  },
};

export const highlights = [
  { value: "3+", label: "Years building production services" },
  { value: "AWS", label: "ECS, Lambda, API Gateway, Cognito" },
  { value: "24/7", label: "On-call incident first responder" },
  { value: "AI", label: "MCP agents & GenAI workflows" },
];

export const experience = [
  {
    company: "Common APP",
    role: "Software Developer",
    period: "Feb 2025 – Present",
    stack: ["C#", "ASP.NET Core", "Angular 18", "NgRx", "AWS", "DynamoDB"],
    points: [
      "Designed and implemented RESTful microservices in C# / ASP.NET Core, applying OOP principles and data structures to build reliable multi-tenant systems.",
      "Used EF Core (LINQ) and Dapper across SQL Server and Aurora, DynamoDB for NoSQL, and Amazon S3 for applicant document storage.",
      "Secured backend services with AWS Cognito via a custom API Gateway Authorizer and used SQS/SNS for event-driven communication across services.",
      "Built responsive Angular 18 SPA components with Angular Material, NgRx state management and ag-grid data tables.",
      "Ran JMeter load tests, Selenium automation suites and Jest/Jasmine unit tests to catch regressions before release.",
      "Built CloudWatch and Sumo Logic dashboards, and used CloudFront + Redis caching to improve performance.",
      "Automated CI/CD with AWS Lambda, CodeBuild, CodePipeline and ECR for containerized deployments.",
      "Built an MCP server integrating Figma, Slack and Jira with custom AI agents and GitHub Copilot to streamline design handoff and code review.",
    ],
  },
  {
    company: "Cigna HealthCare",
    role: "Software Developer Intern",
    period: "Dec 2023 – Nov 2024",
    stack: ["Python", "Django", "FastAPI", "Angular", "PostgreSQL", "AWS"],
    points: [
      "Built and maintained CRUD microservices with Python, Django and FastAPI deployed on AWS, structured with clean OOP service logic.",
      "Developed Angular front-end components against Django/FastAPI APIs following PHI/HIPAA security standards.",
      "Monitored application health and debugged production issues with AWS CloudWatch in an Agile/Scrum team using Git and Jira.",
      "Wrote and optimized SQL queries and ORM data models on PostgreSQL for efficient, reliable data access.",
    ],
  },
  {
    company: "Wipro",
    role: "Software Developer",
    period: "Nov 2022 – July 2023",
    stack: ["Python", "SQL", "Git", "Agile"],
    points: [
      "Contributed to Python modules for a banking client supporting customer onboarding and transaction workflows.",
      "Applied OOP concepts and data structures to write and debug Python scripts for data validation and processing.",
      "Assisted with unit tests and defect resolution during QA cycles using Git-based version control and code reviews.",
      "Wrote SQL queries for data retrieval and reporting, and documented code changes and testing steps.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered Document Q&A Chatbot",
    subtitle: "RAG Microservices Platform",
    description:
      "A retrieval-augmented chatbot built as an API-driven microservices platform. An event-driven ingestion pipeline chunks and embeds documents into a Pinecone vector database; the FastAPI service is containerized with Docker on AWS ECS and calls the OpenAI API through LangChain — delivering grounded answers with sub-500ms retrieval across 10K+ embedded chunks.",
    stack: ["Python", "FastAPI", "LangChain", "Pinecone", "Docker", "AWS ECS", "CloudWatch"],
    image: ragImage,
    url: "https://github.com/VinayKumar939",
  },
  {
    title: "Real-Time Collaborative Issue Tracker",
    subtitle: "Full-Stack Platform",
    description:
      "A multi-tiered issue tracking platform with a C#/.NET REST API backend and a React single-page frontend. Object-oriented design patterns model the issue lifecycle, WebSockets push real-time updates to every collaborator, and the whole thing runs on AWS as containerized, API-driven microservices.",
    stack: ["C#", ".NET", "React", "WebSockets", "AWS", "Docker"],
    image: trackerImage,
    url: "https://github.com/VinayKumar939",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  {
    group: "Frameworks & Libraries",
    items: [
      "ASP.NET Core Web API",
      ".NET Core",
      "EF Core",
      "Dapper",
      "LINQ",
      "Angular 18",
      "Angular Material",
      "NgRx",
      "ag-grid",
      "Django",
      "FastAPI",
      "React",
    ],
  },
  {
    group: "Cloud & AWS",
    items: [
      "ECS Fargate",
      "Lambda",
      "API Gateway",
      "SQS / SNS",
      "CodeBuild",
      "CodePipeline",
      "ECR",
      "CloudFront",
      "Cognito",
      "Docker",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
  { group: "Databases", items: ["SQL Server", "Aurora", "DynamoDB", "PostgreSQL", "MySQL"] },
  {
    group: "Testing & Quality",
    items: ["Jest", "Jasmine", "Selenium", "JMeter", "Postman", "Code Reviews", "Agile / Scrum"],
  },
  {
    group: "Monitoring & Ops",
    items: ["CloudWatch", "Sumo Logic", "Sentry", "LogRocket", "Incident Response (IPM)", "Tableau"],
  },
  {
    group: "AI / GenAI",
    items: [
      "GitHub Copilot",
      "Prompt Engineering",
      "Generative AI Concepts",
      "MCP Agent Workflows",
      "AI-Assisted Code Review",
    ],
  },
];

export const sections = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact Me" },
];
