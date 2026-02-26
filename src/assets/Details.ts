/**
 * COMPANY ICONS — To add your own logos:
 *
 * 1. Drop your PNG files into: src/assets/icons/
 *    Suggested filenames:
 *      fravityai.png  |  thoughtbot.png  |  figma.png  |  stripe.png  |  osaka.png
 *    (aws.png is already mapped to the existing amazon.png below)
 *
 * 2. Uncomment the relevant import lines below and replace `null` with the imported variable
 *    in the matching education/experience entry.
 *
 * Until then, the UI falls back to a generic building/school icon automatically.
 */

import aws from "@/assets/icons/amazon.png";

import fravityai from "@/assets/icons/fravityai.png";
import thoughtbot from "@/assets/icons/thoughtbot.png";
import figma from "@/assets/icons/figma.png";
import stripe from "@/assets/icons/stripe.png";
import osaka from "@/assets/icons/osaka.png";

const details = {
  name: {
    first: "Ed",
    last: "Diaz",
    nickname: "ED",
  },
  title: "Senior Software Engineer",
  biography:
    "Senior software engineer with **10+ years** across cloud infrastructure, payments, product engineering, and AI. High ownership: ship end-to-end features, improve reliability and performance, and partner closely with product/design. Comfortable in early-stage ambiguity (0→1) and scaling constraints (latency, cost, on-call).\n\n**Core Strengths:** 0→1 product delivery · Full-stack execution (React + APIs + data) · Systems + reliability (SLOs, on-call, observability) · DevOps pragmatism (CI/CD, infra as code, cost) · AI feature shipping (evals, monitoring, guardrails)",
  education: [
    {
      school: "Osaka University",
      url: "https://www.osaka-u.ac.jp/en",
      icon: osaka as unknown as string,
      iconMin: osaka as unknown as string,
      location: "Osaka, Japan",
      degree: "Master of Science (Computer Science)",
      major: "Computer Science",
      start: "2014",
      end: "2015",
    },
    {
      school: "Osaka University",
      url: "https://www.osaka-u.ac.jp/en",
      icon: osaka as unknown as string,
      iconMin: osaka as unknown as string,
      location: "Osaka, Japan",
      degree: "Bachelor of Science (Computer Science)",
      major: "Computer Science",
      start: "2010",
      end: "2014",
    },
  ],
  experience: [
    {
      company: "FravityAI",
      url: "https://www.fravity.ai/",
      icon: fravityai as unknown as string,
      iconMin: fravityai as unknown as string,
      location: "Seattle, WA",
      contract: "Remote",
      position: "Sr Software Engineer",
      start: "10/2024",
      end: "02/2026",
      description: [
        "Built and shipped AI product features end-to-end (React/Next.js + TypeScript, Python, Postgres) with rapid customer-driven iteration",
        "Productionized LLM workflows (OpenAI/Claude APIs/Cerebras) with retrieval (pgvector/Pinecone), evaluation harnesses, and telemetry (Rollbar/Sentry)",
        "Designed scalable backend services (Python/TypeScript, REST/GraphQL) and async processing (Redis/queues) for secure multi-tenant workloads",
        "Improved reliability using SLOs, alerting, dashboards (Datadog/Grafana), and incident runbooks; drove root-cause fixes for recurring issues",
        "Hardened deployment and cost discipline with AWS (ECS/Lambda/S3/RDS), IaC (Terraform/CDK), and CI/CD (GitHub Actions/Jenkins)",
      ],
      skills: [
        "React/Next.js",
        "TypeScript",
        "Python",
        "LLM APIs",
        "pgvector/Pinecone",
        "Datadog/Grafana",
        "AWS ECS/Lambda",
        "Terraform/CDK",
      ],
    },
    {
      company: "thoughtbot",
      url: "https://thoughtbot.com/",
      icon: thoughtbot as unknown as string,
      iconMin: thoughtbot as unknown as string,
      location: "Seattle, WA",
      contract: "Remote",
      position: "Senior Software Engineer",
      start: "03/2023",
      end: "09/2024",
      description: [
        "Delivered MVPs and production features using React + TypeScript and Ruby/Go/Python services with Postgres, balancing speed and maintainability",
        "Led architecture decisions: API contracts (GraphQL), auth (OAuth/JWT), and data modeling (Postgres/Redis) with pragmatic handoff docs",
        "Set up deployment pipelines (Docker, GitHub Actions/CircleCI, AWS) to enable safe, frequent releases and rapid rollback strategies",
        "Improved quality with automated testing (Jest/Playwright/Pytest), code review standards, and observability (Sentry/Datadog)",
        "Worked closely with founders/PMs/designers to scope and ship increments, applying design-system patterns (Tailwind/component libraries) and WCAG basics",
      ],
      skills: [
        "React",
        "TypeScript",
        "Ruby on Rails",
        "GraphQL",
        "Docker",
        "Jest/Playwright",
        "Tailwind CSS",
        "AWS",
      ],
    },
    {
      company: "Figma",
      url: "https://www.figma.com/",
      icon: figma as unknown as string,
      iconMin: figma as unknown as string,
      location: "San Francisco, CA",
      contract: "Onsite",
      position: "Senior Full-Stack Engineer",
      start: "05/2021",
      end: "02/2023",
      description: [
        "Built collaboration-focused product experiences using TypeScript + React, optimizing complex UI state and interaction performance",
        "Developed backend capabilities (Node.js services, Postgres/Redis) with emphasis on correctness, backwards compatibility, and safe migrations",
        "Improved performance and reliability via profiling and optimization (tracing, caching), tightening p95 latency on key user actions",
        "Contributed to internal tooling (monorepo workflows, CI/CD, testing automation) to accelerate shipping while keeping quality high",
        "Strengthened polish through accessibility and internationalization efforts (WCAG, localization) with close design/product collaboration",
      ],
      skills: [
        "TypeScript",
        "React",
        "Node.js",
        "Postgres",
        "Redis",
        "WCAG/i18n",
        "Monorepo",
        "CI/CD",
      ],
    },
    {
      company: "Stripe",
      url: "https://stripe.com/",
      icon: stripe as unknown as string,
      iconMin: stripe as unknown as string,
      location: "San Francisco, CA",
      contract: "Onsite",
      position: "Software Engineer",
      start: "06/2018",
      end: "04/2021",
      description: [
        "Built and maintained critical payment services (Python/TypeScript, API design, Postgres) focused on correctness and developer reliability",
        "Implemented safety patterns across money flows (idempotency, retries, queue-based processing) using event-driven designs and robust tests",
        "Improved operational excellence with metrics/alerts and incident readiness (Datadog dashboards), contributing on-call learnings to prevention work",
        "Shipped internal tools and dashboards (React + TypeScript, GraphQL) to improve support and engineering efficiency for customer issues",
        "Collaborated on secure-by-default design (authn/authz, data handling) while balancing compliance needs with delivery speed",
      ],
      skills: [
        "Python",
        "TypeScript",
        "Postgres",
        "Event-driven Systems",
        "Datadog",
        "GraphQL",
        "React",
      ],
    },
    {
      company: "AWS",
      url: "https://aws.amazon.com/",
      icon: aws,
      iconMin: aws,
      location: "Seattle, WA",
      contract: "Onsite",
      position: "Software Development Engineer",
      start: "06/2015",
      end: "05/2018",
      description: [
        "Developed and operated cloud backend services (Java/Python, distributed systems) emphasizing scalability, durability, and operational rigor",
        "Built internal tools and consoles (React/Angular + JavaScript, service APIs) to improve workflows and reduce manual operational work",
        "Implemented automated infrastructure and deployments (CloudFormation/IaC patterns, CI tooling) enabling repeatable releases and safer changes",
        "Improved service health via instrumentation, monitoring, and alerting (CloudWatch, metrics/logging) and participated in on-call incident response",
        "Reduced performance bottlenecks through profiling and optimization (caching strategies, query tuning) under strict latency targets",
      ],
      skills: [
        "Java",
        "Python",
        "React/Angular",
        "CloudFormation",
        "CloudWatch",
        "Distributed Systems",
      ],
    },
  ],
  languages: [
    {
      name: "English",
      level: "E",
      native: true,
    },
  ],
  contact: {
    location: "Seattle, WA 98116",
    email: "eddydiaz0219@gmail.com",
    phone: "+14252705400",
    website: "https://www.eddiaz.dev",
    linkedin: "https://www.linkedin.com/in/eddydiaz/",
    github: "https://www.github.com/eddydiaz",
    gitlab: "",
    deviantart: "",
    researchgate: "",
  },
};

export default details;
