import { Project } from './Projects';

// Import project thumbnail images
import mendelgenImg from './projects/mendelgen.png';
import shippingProtectionImg from './projects/shipping-protection.png';
import tabRabbitImg from './projects/tabrabbit.png';
import userhubImg from './projects/userhub.png';
import huntrImg from './projects/huntr.png';
import propertyManagementImg from './projects/property-management.png';
import awellImg from './projects/awell.png';
import pickleballImg from './projects/pickleball.png';
import eMotorImg from './projects/e-motor.png';
import liveblockImg from './projects/liveblock.png';
import genaiWaveImg from './projects/genai-wave.png';
import ottoImg from './projects/otto.png';

// Import all project gallery images
// Project 1 — AI Investigation Copilot
import mendelgen0 from './projects/mendelgen-0.png';
import mendelgen1 from './projects/mendelgen-1.png';
import mendelgen2 from './projects/mendelgen-2.png';
import mendelgen3 from './projects/mendelgen-3.png';
import mendelgen4 from './projects/mendelgen-4.png';

// Project 2 — Multi-Tenant RAG Pipeline
import shipping0 from './projects/shipping-protection-0.png';
import shipping1 from './projects/shipping-protection-1.png';
import shipping2 from './projects/shipping-protection-2.png';
import shipping3 from './projects/shipping-protection-3.png';
import shipping4 from './projects/shipping-protection-4.png';

// Project 3 — Observability & SLO Dashboard
import tabrabbit0 from './projects/tabrabbit-0.png';
import tabrabbit1 from './projects/tabrabbit-1.png';
import tabrabbit2 from './projects/tabrabbit-2.png';
import tabrabbit3 from './projects/tabrabbit-3.png';
import tabrabbit4 from './projects/tabrabbit-4.png';

// Project 4 — GraphQL API Gateway
import userhub0 from './projects/userhub-0.png';
import userhub1 from './projects/userhub-1.png';
import userhub2 from './projects/userhub-2.png';
import userhub3 from './projects/userhub-3.png';
import userhub4 from './projects/userhub-4.png';

// Project 5 — Clinical Workflow Automation
import huntr0 from './projects/huntr-0.png';
import huntr1 from './projects/huntr-1.png';
import huntr2 from './projects/huntr-2.png';
import huntr3 from './projects/huntr-3.png';
import huntr4 from './projects/huntr-4.png';

// Project 6 — Order Protection Service
import property0 from './projects/property-management-0.png';
import property1 from './projects/property-management-1.png';
import property2 from './projects/property-management-2.png';
import property3 from './projects/property-management-3.png';
import property4 from './projects/property-management-4.png';

// Project 7 — Real-Time Collaboration Engine
import awell0 from './projects/awell-0.png';
import awell1 from './projects/awell-1.png';
import awell2 from './projects/awell-2.png';
import awell3 from './projects/awell-3.png';
import awell4 from './projects/awell-4.png';

// Project 8 — Performance Profiler
import pickleball0 from './projects/pickleball-0.png';
import pickleball1 from './projects/pickleball-1.png';
import pickleball2 from './projects/pickleball-2.png';
import pickleball3 from './projects/pickleball-3.png';
import pickleball4 from './projects/pickleball-4.png';

// Project 9 — Design System & Accessibility Toolkit
import emotor0 from './projects/e-motor-0.png';
import emotor1 from './projects/e-motor-1.png';
import emotor2 from './projects/e-motor-2.png';
import emotor3 from './projects/e-motor-3.png';
import emotor4 from './projects/e-motor-4.png';

// Project 10 — Payment Idempotency Service
import liveblock0 from './projects/liveblock-0.png';
import liveblock1 from './projects/liveblock-1.png';
import liveblock2 from './projects/liveblock-2.png';
import liveblock3 from './projects/liveblock-3.png';
import liveblock4 from './projects/liveblock-4.png';

// Project 11 — Merchant Support Dashboard
import genai0 from './projects/genai-wave-0.png';
import genai1 from './projects/genai-wave-1.png';
import genai2 from './projects/genai-wave-2.png';
import genai3 from './projects/genai-wave-3.png';
import genai4 from './projects/genai-wave-4.png';

// Project 12 — CloudOps Console
import otto0 from './projects/otto-0.png';
import otto1 from './projects/otto-1.png';
import otto2 from './projects/otto-2.png';
import otto3 from './projects/otto-3.png';
import otto4 from './projects/otto-4.png';

export const projectsData: Project[] = [
  // ── FravityAI (10/2024 – 02/2026) ──────────────────────────────────────────
  {
    title: "AI Investigation Copilot",
    description: "End-to-end AI copilot for fraud and AML investigation teams built at FravityAI. Shipped React/Next.js + TypeScript front-end with Python FastAPI back-end, wiring OpenAI and Claude APIs through LangChain orchestration. Integrated pgvector retrieval so investigators can surface similar historical cases in sub-second p95 latency. Eval harnesses (RAGAS + custom scorers) and Rollbar/Sentry telemetry keep model quality measurable in production.",
    thumbnail: mendelgenImg,
    images: [mendelgen0, mendelgen1, mendelgen2, mendelgen3, mendelgen4],
    source: "https://github.com/eddydiaz/ai-investigation-copilot",
    demo: "https://www.fravity.ai/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2024-10-01",
    updatedAt: "2026-01-20",
    interactions: {
      stars: 214,
      forks: 38,
    },
  },
  {
    title: "Multi-Tenant RAG Pipeline",
    description: "Scalable retrieval-augmented generation backend for secure multi-tenant AI workloads. Built at FravityAI with Python/TypeScript, Postgres + pgvector, and Pinecone as dual vector stores. Asynchronous processing via Redis queues keeps ingest decoupled from query serving. Row-level security and tenant-scoped namespaces enforce strict data isolation across clients while a shared embedding model cuts infrastructure cost.",
    thumbnail: shippingProtectionImg,
    images: [shipping0, shipping1, shipping2, shipping3, shipping4],
    source: "https://github.com/eddydiaz/multi-tenant-rag",
    demo: "https://www.fravity.ai/",
    language: "Python",
    platform: "github" as const,
    createdAt: "2024-11-15",
    updatedAt: "2025-12-10",
    interactions: {
      stars: 178,
      forks: 29,
    },
  },
  {
    title: "SLO & Observability Dashboard",
    description: "Production reliability dashboard built at FravityAI to track SLOs, error budgets, and alert thresholds across services. Datadog metrics and Grafana panels are unified in a React UI with real-time WebSocket feeds. Incident runbook links surface inline when a budget burns too fast. Shipped via Terraform-managed infrastructure on AWS ECS; CI/CD via GitHub Actions deploys in under four minutes.",
    thumbnail: tabRabbitImg,
    images: [tabrabbit0, tabrabbit1, tabrabbit2, tabrabbit3, tabrabbit4],
    source: "https://github.com/eddydiaz/slo-dashboard",
    demo: "https://www.fravity.ai/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2025-02-01",
    updatedAt: "2025-11-30",
    interactions: {
      stars: 143,
      forks: 22,
    },
  },

  // ── thoughtbot (03/2023 – 09/2024) ─────────────────────────────────────────
  {
    title: "Unified GraphQL API Gateway",
    description: "Federated GraphQL gateway designed and delivered at thoughtbot for a B2B SaaS client. Stitches Ruby on Rails, Go, and Python microservices behind a single Apollo Router. OAuth 2.0 / JWT auth middleware, per-field rate limiting, and schema-change CI checks keep the contract stable across teams. Deployment via Docker + CircleCI on AWS, with Sentry and Datadog wired for observability from day one.",
    thumbnail: userhubImg,
    images: [userhub0, userhub1, userhub2, userhub3, userhub4],
    source: "https://github.com/eddydiaz/graphql-gateway",
    demo: "https://thoughtbot.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2023-04-10",
    updatedAt: "2024-08-15",
    interactions: {
      stars: 267,
      forks: 51,
    },
  },
  {
    title: "Clinical Workflow Automation MVP",
    description: "Healthcare MVP shipped at thoughtbot for an early-stage digital-health client. Drag-and-drop care pathway builder (React + TypeScript) backed by a Ruby on Rails API and Postgres. HIPAA-compliant data handling, audit logging, and role-based access control built in from the start. Full test suite with RSpec + Playwright; deployed to AWS with a GitHub Actions pipeline enabling same-day hotfixes.",
    thumbnail: awellImg,
    images: [awell0, awell1, awell2, awell3, awell4],
    source: "https://github.com/eddydiaz/clinical-workflow-mvp",
    demo: "https://thoughtbot.com/",
    language: "Ruby",
    platform: "github" as const,
    createdAt: "2023-09-01",
    updatedAt: "2024-06-20",
    interactions: {
      stars: 189,
      forks: 34,
    },
  },
  {
    title: "E-Commerce Order Protection Service",
    description: "Shipping and order protection platform built at thoughtbot for a retail client. React + TypeScript storefront widget integrates at checkout to offer coverage plans; Go microservice handles claim adjudication and payout logic with idempotent processing and robust retry queues. Postgres for persistence, Redis for ephemeral state. Deployed on AWS with Terraform; Playwright test suite covers critical checkout paths end-to-end.",
    thumbnail: propertyManagementImg,
    images: [property0, property1, property2, property3, property4],
    source: "https://github.com/eddydiaz/order-protection-service",
    demo: "https://thoughtbot.com/",
    language: "Go",
    platform: "github" as const,
    createdAt: "2023-11-20",
    updatedAt: "2024-09-05",
    interactions: {
      stars: 312,
      forks: 67,
    },
  },

  // ── Figma (05/2021 – 02/2023) ──────────────────────────────────────────────
  {
    title: "Real-Time Collaboration Engine",
    description: "Multiplayer editing engine built at Figma powering presence indicators, live cursors, and conflict-free document merges. TypeScript + React front-end manages complex optimistic UI state; Node.js back-end handles WebSocket fan-out and CRDT reconciliation against Postgres. Performance budget enforced by custom tracing that flags any interaction taking over 100 ms. Shipped behind a feature flag with progressive rollout.",
    thumbnail: liveblockImg,
    images: [liveblock0, liveblock1, liveblock2, liveblock3, liveblock4],
    source: "https://github.com/eddydiaz/collab-engine",
    demo: "https://www.figma.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2021-06-15",
    updatedAt: "2023-01-28",
    interactions: {
      stars: 534,
      forks: 112,
    },
  },
  {
    title: "p95 Latency Performance Profiler",
    description: "Internal performance tooling at Figma for tracking p50/p95/p99 latency on key user actions (canvas load, export, file open). Node.js collector aggregates client-side timing traces and writes to a time-series Postgres schema; React dashboard renders flamegraphs and regression alerts. Automated CI check fails PRs that regress a tracked metric by more than 10%. Saved multiple on-call incidents by surfacing regressions before merge.",
    thumbnail: eMotorImg,
    images: [emotor0, emotor1, emotor2, emotor3, emotor4],
    source: "https://github.com/eddydiaz/perf-profiler",
    demo: "https://www.figma.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2021-10-01",
    updatedAt: "2022-11-15",
    interactions: {
      stars: 398,
      forks: 84,
    },
  },
  {
    title: "Accessibility & i18n Toolkit",
    description: "Internal WCAG compliance and internationalization toolkit built at Figma. Lint rules (ESLint + custom AST transforms) catch missing aria labels and hard-coded English strings at commit time. A React component library layer wraps MUI primitives with accessible defaults and RTL-aware layouts. Localization pipeline pulls from a Crowdin integration and injects locale bundles during the Vite build, supporting 12 languages at launch.",
    thumbnail: pickleballImg,
    images: [pickleball0, pickleball1, pickleball2, pickleball3, pickleball4],
    source: "https://github.com/eddydiaz/a11y-i18n-toolkit",
    demo: "https://www.figma.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2022-03-10",
    updatedAt: "2022-12-20",
    interactions: {
      stars: 287,
      forks: 59,
    },
  },

  // ── Stripe (06/2018 – 04/2021) ─────────────────────────────────────────────
  {
    title: "Payment Idempotency Service",
    description: "Idempotent payment processing service built at Stripe to guarantee exactly-once money movement under network retries and partial failures. Python + Postgres core with a distributed locking layer backed by Redis. Idempotency keys are hashed and stored with TTL; conflicting concurrent requests block then compare outcomes. Extensive property-based testing with Hypothesis and chaos injection in staging. Handles millions of API calls daily with sub-10 ms p99.",
    thumbnail: huntrImg,
    images: [huntr0, huntr1, huntr2, huntr3, huntr4],
    source: "https://github.com/eddydiaz/payment-idempotency",
    demo: "https://stripe.com/",
    language: "Python",
    platform: "github" as const,
    createdAt: "2018-09-01",
    updatedAt: "2021-03-15",
    interactions: {
      stars: 445,
      forks: 93,
    },
  },
  {
    title: "Merchant Support Dashboard",
    description: "Internal support tooling built at Stripe for the CX and engineering teams to investigate payment disputes, refunds, and API errors. React + TypeScript front-end backed by a GraphQL layer over existing Python services. Search indexes across millions of transaction records with Elasticsearch; Datadog RUM tracks support agent session performance. Role-based access control and complete audit trail for compliance. Reduced average resolution time by 40%.",
    thumbnail: genaiWaveImg,
    images: [genai0, genai1, genai2, genai3, genai4],
    source: "https://github.com/eddydiaz/merchant-support-dashboard",
    demo: "https://stripe.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2019-04-01",
    updatedAt: "2021-02-28",
    interactions: {
      stars: 321,
      forks: 58,
    },
  },

  // ── AWS (06/2015 – 05/2018) ────────────────────────────────────────────────
  {
    title: "CloudOps Internal Console",
    description: "Internal operations console built at AWS for managing distributed cloud backend services — health views, deployment controls, and runbook automation in one place. React + Angular hybrid front-end backed by Java and Python service APIs. CloudFormation stacks declared as code; deployment pipeline via internal CI tooling enables one-click safe rollbacks. CloudWatch metric dashboards and SNS alert routing integrated directly into the console UI.",
    thumbnail: ottoImg,
    images: [otto0, otto1, otto2, otto3, otto4],
    source: "https://github.com/eddydiaz/cloudops-console",
    demo: "https://aws.amazon.com/",
    language: "Java",
    platform: "github" as const,
    createdAt: "2015-10-01",
    updatedAt: "2018-04-20",
    interactions: {
      stars: 523,
      forks: 107,
    },
  },
];

export default projectsData;
