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
  title: "Senior AI Software Engineer",
  biography:
    "Senior AI Software Engineer with **10+ years** across cloud infrastructure, payments, product engineering, and AI. High ownership: ship end-to-end features, improve reliability and performance, and partner closely with product/design. Comfortable in early-stage ambiguity (0→1) and scaling constraints (latency, cost, on-call).\n\n**Core Strengths:** 0→1 product delivery · Full-stack execution (React + APIs + data) · Systems + reliability (SLOs, on-call, observability) · DevOps pragmatism (CI/CD, infra as code, cost) · AI feature shipping (evals, monitoring, guardrails)",
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
      end: "2016",
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
      position: "Senior AI Software Engineer ",
      start: "10/2024",
      end: "Current",
      description: [
        "Joined as the second technical hire and built AI product capabilities end-to-end, turning customer feedback into rapid production iterations.",
        "Productionized LLM workflows with retrieval, evaluation, and telemetry to improve response quality and confidence in production behavior.",
        "Designed secure, multi-tenant backend services and asynchronous processing for scalable AI workloads.",
        "Established reliability practices including service objectives, dashboards, alerting, incident runbooks, and root-cause remediation.",
        "Strengthened deployment automation and cloud cost discipline to support frequent, safe releases as the product scaled."
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
        "Delivered MVPs and production features for client products, balancing rapid iteration with maintainability and long-term product quality.",
        "Led decisions around API contracts, authentication flows, and data modeling while creating pragmatic handoff documentation.",
        "Improved release safety through deployment automation, rollback strategies, and repeatable delivery practices.",
        "Raised engineering quality through automated testing, code review standards, and production observability.",
        "Partnered closely with founders, product managers, and designers to scope increments and ship accessible, polished user experiences."
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
        "Built collaboration-focused product experiences and optimized complex client-side interactions for responsiveness and performance.", 
        "Developed backend capabilities supporting product workflows with emphasis on correctness, backward compatibility, and safe migrations.", 
        "Improved latency on key user actions through profiling, caching, and targeted performance optimization.", 
        "Contributed to internal tooling and delivery workflows that accelerated shipping while maintaining a high quality bar.", 
        "Strengthened accessibility and internationalization across product experiences in close collaboration with design and product teams."
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
      location: "New York, NY",
      contract: "Onsite",
      position: "Software Engineer",
      start: "06/2018",
      end: "04/2021",
      description: [
        "Built and maintained critical payment-platform capabilities focused on correctness, reliability, and a dependable developer experience.", 
        "Implemented resilient money-flow patterns including idempotency, retries, and event-driven processing for safer transaction handling.", 
        "Improved operational readiness with metrics, alerts, dashboards, incident response, and prevention work informed by on-call learnings.", 
        "Shipped internal tools and support workflows that improved engineering efficiency and customer-issue resolution.", 
        "Collaborated on secure-by-default designs for authentication, authorization, and sensitive data handling while balancing compliance and delivery speed."
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
      company: "Amazon",
      url: "https://amazon.com/",
      icon: aws,
      iconMin: aws,
      location: "New York, NY",
      contract: "Onsite",
      position: "Associate Software Engineer",
      start: "04/2016",
      end: "05/2018",
      description: [
        "Built and maintained backend and customer-facing capabilities for Amazon e-commerce platforms, with emphasis on scale, durability, and reliable transaction flows.", 
        "Developed internal tools and operational interfaces that reduced manual work and improved day-to-day commerce workflows.", 
        "Improved deployment automation and release reliability across high-traffic services, enabling safer and more repeatable changes.", 
        "Strengthened service health through instrumentation, monitoring, incident response, and root-cause remediation.", 
        "Reduced latency and performance bottlenecks through profiling, caching, and data-access optimization under demanding traffic conditions."
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
    email: "itpro-ediaz@proton.me",
    phone: "+14253588549",
    website: "https://ed-diaz.vercel.app/",
    linkedin: "https://www.linkedin.com/in/edmon-diaz-612940428/",
    github: "https://www.github.com/diazeddy",
    gitlab: "",
    deviantart: "",
    researchgate: "",
  },
};

export default details;
