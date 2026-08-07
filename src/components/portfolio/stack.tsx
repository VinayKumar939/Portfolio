import { Wrench } from "lucide-react";

import { Section } from "./section";
import { stack } from "@/data/portfolio";

const skillLogos: Record<string, string> = {
  "C#": "dotnet",
  Java: "openjdk",
  Python: "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  SQL: "mysql",
  "ASP.NET Core Web API": "dotnet",
  ".NET Core": "dotnet",
  "EF Core": "dotnet",
  Dapper: "dotnet",
  LINQ: "dotnet",
  "Angular 18": "angular",
  "Angular Material": "angular",
  NgRx: "ngrx",
  "ag-grid": "https://www.google.com/s2/favicons?domain=ag-grid.com&sz=64",
  Django: "django",
  FastAPI: "fastapi",
  React: "react",
  "ECS Fargate": "https://api.iconify.design/logos:aws-ecs.svg",
  Lambda: "https://api.iconify.design/logos:aws-lambda.svg",
  "API Gateway": "https://api.iconify.design/logos:aws-api-gateway.svg",
  "SQS / SNS": "https://api.iconify.design/logos:aws-sqs.svg",
  CodeBuild: "https://api.iconify.design/logos:aws-codebuild.svg",
  CodePipeline: "https://api.iconify.design/logos:aws-codepipeline.svg",
  ECR: "https://api.iconify.design/logos:aws.svg",
  CloudFront: "https://api.iconify.design/logos:aws-cloudfront.svg",
  Cognito: "https://api.iconify.design/logos:aws-cognito.svg",
  Docker: "docker",
  Microservices: "kubernetes",
  "Event-Driven Architecture": "apachekafka",
  "SQL Server": "https://api.iconify.design/simple-icons:microsoftsqlserver.svg",
  Aurora: "https://api.iconify.design/logos:aws-aurora.svg",
  DynamoDB: "https://api.iconify.design/logos:aws-dynamodb.svg",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  Jest: "jest",
  Jasmine: "jasmine",
  Selenium: "selenium",
  JMeter: "apachejmeter",
  Postman: "postman",
  "Code Reviews": "github",
  "Agile / Scrum": "jira",
  CloudWatch: "https://api.iconify.design/logos:aws-cloudwatch.svg",
  "Sumo Logic": "sumologic",
  Sentry: "sentry",
  LogRocket: "https://logrocket.com/favicon.ico",
  "Incident Response (IPM)": "pagerduty",
  Tableau: "https://api.iconify.design/logos:tableau-icon.svg",
  "GitHub Copilot": "githubcopilot",
  "Prompt Engineering": "openai",
  "Generative AI Concepts": "openai",
  "MCP Agent Workflows": "modelcontextprotocol",
  "AI-Assisted Code Review": "githubcopilot",
};

export function Stack() {
  return (
    <Section id="stack" eyebrow="04 — Stack" title="Tools I reach for.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div key={group.group} className="glow-card rounded-3xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-lg border bg-surface-2 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {skillLogos[item] ? (
                    <span className="flex size-6 shrink-0 items-center justify-center rounded bg-white">
                      <img
                        src={
                          skillLogos[item].startsWith("http")
                            ? skillLogos[item]
                            : `https://cdn.simpleicons.org/${skillLogos[item]}`
                        }
                        alt=""
                        width="16"
                        height="16"
                        className="size-4 object-contain"
                      />
                    </span>
                  ) : (
                    <span className="flex size-6 shrink-0 items-center justify-center rounded bg-white text-neutral-700">
                      <Wrench aria-hidden="true" className="size-4" />
                    </span>
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
