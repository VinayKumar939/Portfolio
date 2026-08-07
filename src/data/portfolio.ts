import ragImage from "@/assets/project-rag.jpg";
import trackerImage from "@/assets/project-tracker.jpg";

export const profile = {
  name: "Vinay Kumar Mannava",
  role: "Full Stack Software Developer",
  email: "vinay.kmannava@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinaykumar675/",
  github: "https://github.com/VinayKumar939",
  summary:
    "Software Developer with 3 years of experience designing, building, and shipping production-grade services across the full stack — from C#, .NET and Python/Django backends to Angular frontends, deploying on AWS. I take ownership of what I build: writing clean, maintainable code, keeping services reliable in production, and iterating quickly when things need to change.",
  summary2:
    "Experienced in delivering reliable, scalable applications through disciplined development practices, automated CI/CD pipelines, production monitoring, and operational support. Recently focused on applying Generative AI and agent-based workflows to develop practical solutions for real-world business needs.",
  education: {
    degree: "M.S. in Information Technology & Management",
    school: "University of Texas at Dallas, Dallas, TX",
    years: "2023 – 2024",
  },
};

export const highlights = [
  { value: "3+", label: "Years building production services" },
  { value: "AWS", label: "ECS, Lambda, API Gateway, Cognito" },
  { value: "AI", label: "MCP agents & GenAI workflows" },
];

export const experience = [
  {
    company: "Common APP",
    role: "Software Developer",
    period: "Feb 2025 – Present",
    stack: ["C#", "ASP.NET Core", "Angular 18", "NgRx", "AWS", "DynamoDB"],
    description:
      "Developing secure, scalable multi-tenant applications with C#, ASP.NET Core, Angular, and AWS while supporting automated delivery, observability, and AI-assisted engineering workflows.",
  },
  {
    company: "Cigna HealthCare",
    role: "Software Developer Intern",
    period: "Dec 2023 – Nov 2024",
    stack: ["Python", "Django", "FastAPI", "Angular", "PostgreSQL", "AWS"],
    description:
      "Built HIPAA-aligned healthcare applications using Python, Django, FastAPI, Angular, PostgreSQL, and AWS, with a focus on reliable APIs, efficient data access, and production support.",
  },
  {
    company: "Wipro",
    role: "Software Developer",
    period: "Nov 2022 – July 2023",
    stack: ["Python", "SQL", "Git", "Agile"],
    description:
      "Contributed to Python and SQL solutions for banking workflows, including data validation, testing, defect resolution, reporting, and delivery within an Agile engineering team.",
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
    title: "MNIST Digital Classification and Handwritten Digit Recognition",
    description:
      "An interactive handwritten digit recognition application powered by a convolutional neural network trained on the MNIST dataset with TensorFlow and Keras. The trained model is converted to TensorFlow.js for real-time, in-browser inference, allowing users to draw digits with mouse or touch input and view confidence scores across all ten classes through Chart.js visualizations.",
    stack: ["Python", "TensorFlow", "Keras", "TensorFlow.js", "JavaScript", "Chart.js"],
    image: trackerImage,
    url: "https://vinays-digit-recognition.netlify.app/",
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
